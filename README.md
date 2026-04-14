# Jennings Learning

Jennings Learning is a homeschool learning hub with:

- A subject home page
- Shared learner profiles chosen before subjects
- A live Math path that is ready now
- A live Spelling path with spoken words and hints
- A live Grammar path with guided multiple-choice review
- A live Bible path with doctrine words, Bible facts, and verse fill-ins
- Space for more subject lanes in the future
- Skill cards with last-used history
- Skill recommendations based on saved learner progress
- Simple mute toggle for voice playback
- 10-problem rounds with a clear finish line
- Saved progress in IndexedDB
- Session tracking
- Stars, streaks, and badge rewards
- Addition, subtraction, multiplication, division, and times tables
- Spoken spelling practice with clue-based hints
- Better ElevenLabs voice support through a local server proxy

Right now, Math, Spelling, Grammar, and Bible are built subjects. The app shell is set up so more subjects can be added one at a time without rebuilding the whole experience.

## Run it

1. In this folder, run `npm start`
2. Open `http://localhost:3000`

Do not test by double-clicking [index.html](E:\apps-codexgpt\index.html) as a `file://` page. The audio and API features are designed to run through the local server.

## ElevenLabs voice

Set these environment variables before running:

```powershell
$env:ELEVENLABS_API_KEY="your_api_key_here"
$env:ELEVENLABS_VOICE_ID="your_voice_id_here"
npm start
```

The app now uses one ElevenLabs voice instead of a browser voice picker.
This project also auto-loads a local `.env` file for the server and speech-cache builder.

To pre-render the fixed coach lines into local MP3 files ahead of time:

```powershell
$env:ELEVENLABS_API_KEY="your_api_key_here"
$env:ELEVENLABS_VOICE_ID="your_voice_id_here"
npm run build:speech
```

Dynamic math and spelling prompts are also cached automatically the first time they are spoken when using the local server.

Remember to disclose clearly to children that the spoken coach voice is AI-generated.

## Data storage

The app currently stores all learner profiles, sessions, scores, streaks, and answer history in the browser using IndexedDB.

That means:

- Progress is remembered on the same browser and device
- No external database is required yet
- A future version can move this to SQLite, Supabase, or Postgres for multi-device syncing

## Good next upgrades

- Grammar drills and sentence practice
- Bible questions and review paths
- Parent login and protected settings
- Cloud sync across devices
- A real hosted database for multi-device progress
