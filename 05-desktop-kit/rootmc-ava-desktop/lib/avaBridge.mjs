import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DISCORD_API = "https://discord.com/api/v10";
const GUILD_ID = "1516108585740800042";

function firstEnv(env, keys) {
  for (const k of keys) {
    const v = env[k] ?? process.env[k];
    if (v != null && String(v).trim()) return String(v).trim();
  }
  return "";
}

function parseEnvFile(filePath) {
  const out = {};
  if (!fs.existsSync(filePath)) return out;
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i < 0) continue;
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    out[k] = v;
  }
  return out;
}

/** Find RootMC\.env on any drive — prefer EXE/kit drive, then common layouts. */
function discoverEnvCandidates() {
  const out = [];
  const push = (p) => {
    if (p && !out.includes(p)) out.push(p);
  };

  push(process.env.ROOTMC_ENV_FILE);
  if (process.env.ROOTMC_ROOT) {
    push(path.join(process.env.ROOTMC_ROOT, ".env"));
    push(path.join(process.env.ROOTMC_ROOT, "..", ".credentials", ".env"));
  }

  // Packed EXE lives under .../Ava Laptop/AvaIvy/ — walk up for RootMC/.env
  let cur = path.resolve(__dirname, "..");
  for (let i = 0; i < 8; i++) {
    push(path.join(cur, ".env"));
    push(path.join(cur, ".credentials", ".env"));
    const parent = path.dirname(cur);
    if (!parent || parent === cur) break;
    cur = parent;
  }

  const rels = [
    [".1 Work Stations", "RootMC", ".env"],
    [".1 Work Stations", ".credentials", ".env"],
    ["RootMC", ".env"],
  ];
  const letters = "CDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // Prefer drive of this process / exe resources
  const homeDrive = (process.execPath || process.cwd() || "C:\\").slice(0, 1).toUpperCase();
  const ordered = [homeDrive, ...letters.filter((L) => L !== homeDrive)];
  for (const L of ordered) {
    const root = `${L}:\\`;
    try {
      if (!fs.existsSync(root)) continue;
    } catch {
      continue;
    }
    for (const parts of rels) {
      push(path.join(root, ...parts));
    }
  }

  push(path.resolve(__dirname, "../../../.env"));
  push(path.resolve(__dirname, "../../../../.env"));
  push(path.resolve(__dirname, "../../../.credentials/.env"));
  return out.filter(Boolean);
}

export async function loadDesktopEnv() {
  const candidates = discoverEnvCandidates();
  let fileEnv = {};
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      fileEnv = { ...fileEnv, ...parseEnvFile(p) };
    }
  }
  const discordToken = firstEnv(fileEnv, [
    "AVA_DISCORD_BOT_TOKEN",
    "DISCORD_AVA_BOT_TOKEN",
  ]).replace(/^Bot\s+/i, "");
  const telegramToken = firstEnv(fileEnv, ["AVA_TELEGRAM_BOT_TOKEN"]);
  const operatorChatId = firstEnv(fileEnv, ["AVA_TELEGRAM_OPERATOR_IDS"])
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)[0] || "6644482344";
  return {
    discordToken,
    telegramToken,
    operatorChatId,
    rewriteUrl: firstEnv(fileEnv, ["AVA_REWRITE_URL"]) || "http://127.0.0.1:8787/api/rewrite",
  };
}

export async function listDiscordTextChannels(env) {
  if (!env.discordToken) return { ok: false, detail: "missing_discord_token", channels: [] };
  const res = await fetch(`${DISCORD_API}/guilds/${GUILD_ID}/channels`, {
    headers: { Authorization: `Bot ${env.discordToken}` },
  });
  const data = await res.json();
  if (!res.ok) return { ok: false, detail: data?.message || res.status, channels: [] };
  const channels = (Array.isArray(data) ? data : [])
    .filter((c) => c.type === 0)
    .map((c) => ({ id: c.id, name: c.name }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return { ok: true, channels };
}

export async function fetchDiscordHistory(env, channelId, limit = 42) {
  if (!env.discordToken || !channelId) {
    return { ok: false, messages: [], detail: "missing_token_or_channel" };
  }
  const res = await fetch(
    `${DISCORD_API}/channels/${channelId}/messages?limit=${Math.min(100, limit)}`,
    { headers: { Authorization: `Bot ${env.discordToken}` } },
  );
  const data = await res.json();
  if (!res.ok) return { ok: false, messages: [], detail: data?.message || res.status };
  const messages = (Array.isArray(data) ? data : [])
    .reverse()
    .slice(-limit)
    .map((m) => ({
      who: m.author?.username || m.author?.id || "?",
      text: m.content || "",
      id: m.id,
    }));
  return { ok: true, messages };
}

export async function sendDiscordMessage(env, channelId, content) {
  const res = await fetch(`${DISCORD_API}/channels/${channelId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bot ${env.discordToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: String(content).slice(0, 1900) }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || `discord_${res.status}`);
  return data;
}

export async function fetchTelegramHistory(env, chatId, limit = 42) {
  // Telegram Bot API has no full history; keep a local ring buffer file.
  const bufPath = path.resolve(__dirname, "../data/telegram-context.json");
  try {
    if (!fs.existsSync(bufPath)) return { ok: true, messages: [] };
    const raw = JSON.parse(fs.readFileSync(bufPath, "utf8"));
    const list = Array.isArray(raw[String(chatId)]) ? raw[String(chatId)] : [];
    return { ok: true, messages: list.slice(-limit) };
  } catch {
    return { ok: true, messages: [] };
  }
}

function pushTelegramContext(chatId, who, text) {
  const bufPath = path.resolve(__dirname, "../data/telegram-context.json");
  fs.mkdirSync(path.dirname(bufPath), { recursive: true });
  let raw = {};
  try {
    raw = JSON.parse(fs.readFileSync(bufPath, "utf8"));
  } catch {
    raw = {};
  }
  const key = String(chatId);
  const list = Array.isArray(raw[key]) ? raw[key] : [];
  list.push({ who, text, at: Date.now() });
  raw[key] = list.slice(-80);
  fs.writeFileSync(bufPath, JSON.stringify(raw, null, 2), "utf8");
}

export async function sendTelegramMessage(env, chatId, content) {
  if (!env.telegramToken) throw new Error("missing_telegram_token");
  const res = await fetch(
    `https://api.telegram.org/bot${env.telegramToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: String(content).slice(0, 4000),
        disable_web_page_preview: true,
      }),
    },
  );
  const data = await res.json();
  if (!data.ok) throw new Error(data.description || "telegram_send_failed");
  pushTelegramContext(chatId, "Ava", content);
  return data.result;
}

export async function rewriteDraft(env, { text, surface, context }) {
  try {
    const res = await fetch(env.rewriteUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        surface,
        context,
        authorId: "desktop",
        authorName: "desktop",
      }),
    });
    const data = await res.json();
    if (data?.text) return { ok: true, text: data.text, via: "ava-rewrite" };
  } catch {
    /* fall through — still never raw-send without a pass */
  }
  // Offline fallback: light cleanup still counts as rewrite pass
  const cleaned = String(text || "")
    .replace(/\b\$\s*(\d+)/g, "$1 Gold")
    .replace(/\bdollars?\b/gi, "Gold")
    .trim();
  return { ok: true, text: cleaned || text, via: "offline-fallback" };
}
