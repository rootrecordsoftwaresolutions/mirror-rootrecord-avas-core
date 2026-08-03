/**
 * Ava Ivy desktop — Electron main.
 * Multipage: Discord | Telegram. Always rewrite via local Ava :8787 before send.
 */
import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  loadDesktopEnv,
  fetchDiscordHistory,
  sendDiscordMessage,
  fetchTelegramHistory,
  sendTelegramMessage,
  rewriteDraft,
  listDiscordTextChannels,
} from "./lib/avaBridge.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTEXT_LIMIT = 42;

function createWindow() {
  const win = new BrowserWindow({
    width: 1180,
    height: 780,
    minWidth: 860,
    minHeight: 560,
    title: "Ava Ivy",
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadFile(path.join(__dirname, "renderer", "index.html"));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.handle("ava:env-status", async () => {
  const env = await loadDesktopEnv();
  return {
    ok: true,
    hasDiscord: Boolean(env.discordToken),
    hasTelegram: Boolean(env.telegramToken),
    rewriteUrl: env.rewriteUrl,
    operatorChatId: env.operatorChatId,
  };
});

ipcMain.handle("ava:list-discord-channels", async () => {
  const env = await loadDesktopEnv();
  return listDiscordTextChannels(env);
});

ipcMain.handle("ava:history", async (_e, { surface, channelId }) => {
  const env = await loadDesktopEnv();
  if (surface === "telegram") {
    return fetchTelegramHistory(env, channelId || env.operatorChatId, CONTEXT_LIMIT);
  }
  return fetchDiscordHistory(env, channelId, CONTEXT_LIMIT);
});

ipcMain.handle("ava:send", async (_e, { surface, channelId, text }) => {
  const env = await loadDesktopEnv();
  const hist =
    surface === "telegram"
      ? await fetchTelegramHistory(env, channelId || env.operatorChatId, CONTEXT_LIMIT)
      : await fetchDiscordHistory(env, channelId, CONTEXT_LIMIT);

  const rewritten = await rewriteDraft(env, {
    text,
    surface,
    context: hist.messages || [],
  });
  const finalText = rewritten.text || text;

  if (surface === "telegram") {
    const sent = await sendTelegramMessage(
      env,
      channelId || env.operatorChatId,
      finalText,
    );
    return { ok: true, rewritten: finalText, sent };
  }
  const sent = await sendDiscordMessage(env, channelId, finalText);
  return { ok: true, rewritten: finalText, sent };
});
