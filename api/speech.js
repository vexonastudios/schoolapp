const path = require("path");
const { loadEnvFile } = require("../load-env");

loadEnvFile(path.join(process.cwd(), ".env"));

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const ELEVENLABS_MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";

function applyCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

async function parseBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body || "{}");
  }

  const rawBody = await readRawBody(req);
  return JSON.parse(rawBody || "{}");
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

module.exports = async function handler(req, res) {
  applyCors(res);

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "Use POST for speech requests." });
    return;
  }

  if (!ELEVENLABS_API_KEY || !ELEVENLABS_VOICE_ID) {
    sendJson(res, 503, { error: "Set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID in Vercel." });
    return;
  }

  try {
    const payload = await parseBody(req);
    const text = String(payload.text || "").trim();

    if (!text) {
      sendJson(res, 400, { error: "Speech text is required." });
      return;
    }

    // Vercel Functions should return the MP3 directly instead of writing to disk.
    const audioBuffer = await renderSpeech(text);
    sendJson(res, 200, {
      cached: false,
      contentType: "audio/mpeg",
      audioBase64: audioBuffer.toString("base64"),
    });
  } catch (error) {
    sendJson(res, 500, { error: `Unable to render ElevenLabs speech: ${error.message}` });
  }
};
