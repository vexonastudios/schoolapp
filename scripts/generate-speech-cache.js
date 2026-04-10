const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { loadEnvFile } = require("../load-env");

loadEnvFile(path.join(__dirname, "..", ".env"));

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const ELEVENLABS_MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";
const ROOT_DIR = path.resolve(__dirname, "..");
const AUDIO_CACHE_DIR = path.join(ROOT_DIR, "audio-cache");
const SPEECH_LINES_PATH = path.join(ROOT_DIR, "speech-lines.json");

function toSafeSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80) || "speech";
}

function buildAudioFileName(key, text) {
  const hash = crypto.createHash("sha1").update(text).digest("hex").slice(0, 12);
  return `${toSafeSlug(key)}-${hash}.mp3`;
}

async function renderSpeech(text) {
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
      "xi-api-key": ELEVENLABS_API_KEY,
    },
    body: JSON.stringify({
      text,
      model_id: ELEVENLABS_MODEL_ID,
      output_format: "mp3_44100_128",
    }),
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function main() {
  if (!ELEVENLABS_API_KEY || !ELEVENLABS_VOICE_ID) {
    throw new Error("Set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID before building speech.");
  }

  const lines = JSON.parse(fs.readFileSync(SPEECH_LINES_PATH, "utf8"));
  fs.mkdirSync(AUDIO_CACHE_DIR, { recursive: true });

  for (const line of lines) {
    const fileName = buildAudioFileName(line.key, line.text);
    const filePath = path.join(AUDIO_CACHE_DIR, fileName);

    if (fs.existsSync(filePath)) {
      console.log(`Cached: ${fileName}`);
      continue;
    }

    const audioBuffer = await renderSpeech(line.text);
    fs.writeFileSync(filePath, audioBuffer);
    console.log(`Created: ${fileName}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
