const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { loadEnvFile } = require("./load-env");

loadEnvFile();

const PORT = process.env.PORT || 3000;
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const ELEVENLABS_MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";
const AUDIO_CACHE_DIR = path.join(__dirname, "audio-cache");
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function withCors(headers = {}) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    ...headers,
  };
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, withCors({ "Content-Type": "application/json; charset=utf-8" }));
  res.end(JSON.stringify(payload));
}

function ensureAudioCacheDir() {
  fs.mkdirSync(AUDIO_CACHE_DIR, { recursive: true });
}

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

function serveFile(res, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      sendJson(res, 404, { error: "Not found" });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, withCors({ "Content-Type": MIME_TYPES[ext] || "application/octet-stream" }));
    res.end(data);
  });
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
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

async function handleSpeech(req, res) {
  if (!ELEVENLABS_API_KEY || !ELEVENLABS_VOICE_ID) {
    sendJson(res, 503, { error: "Set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID on the server." });
    return;
  }

  try {
    ensureAudioCacheDir();
    const rawBody = await readRequestBody(req);
    const payload = JSON.parse(rawBody || "{}");
    const text = (payload.text || "").trim();
    const key = (payload.key || "speech").trim();

    if (!text) {
      sendJson(res, 400, { error: "Speech text is required." });
      return;
    }

    const fileName = buildAudioFileName(key, text);
    const filePath = path.join(AUDIO_CACHE_DIR, fileName);
    const publicUrl = `/audio-cache/${fileName}`;

    if (fs.existsSync(filePath)) {
      sendJson(res, 200, { url: publicUrl, cached: true });
      return;
    }

    const audioBuffer = await renderSpeech(text);
    fs.writeFileSync(filePath, audioBuffer);
    sendJson(res, 200, { url: publicUrl, cached: false });
  } catch (error) {
    sendJson(res, 500, { error: `Unable to render ElevenLabs speech: ${error.message}` });
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, withCors());
    res.end();
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/speech") {
    void handleSpeech(req, res);
    return;
  }

  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(__dirname, safePath);

  if (!filePath.startsWith(__dirname)) {
    sendJson(res, 403, { error: "Forbidden" });
    return;
  }

  serveFile(res, filePath);
});

server.listen(PORT, () => {
  console.log(`Jennings Learning is running at http://localhost:${PORT}`);
});
