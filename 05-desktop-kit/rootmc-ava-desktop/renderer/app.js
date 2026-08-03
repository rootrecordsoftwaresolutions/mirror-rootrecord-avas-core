const $ = (id) => document.getElementById(id);

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    $(`page-${btn.dataset.page}`).classList.add("active");
  });
});

function renderHistory(el, messages) {
  el.innerHTML = (messages || [])
    .map(
      (m) =>
        `<div class="msg"><span class="who">${escapeHtml(m.who || "?")}</span>: ${escapeHtml(m.text || "")}</div>`,
    )
    .join("") || "<div class='msg'>(no messages)</div>";
  el.scrollTop = el.scrollHeight;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function boot() {
  const st = await window.avaDesktop.envStatus();
  $("settings-status").textContent = JSON.stringify(st, null, 2);
  if (st.operatorChatId) $("telegram-chat").value = st.operatorChatId;

  const ch = await window.avaDesktop.listDiscordChannels();
  const sel = $("discord-channel");
  sel.innerHTML = "";
  for (const c of ch.channels || []) {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = `#${c.name}`;
    sel.appendChild(opt);
  }
  // Prefer #admins / #updates if present
  const prefer = (ch.channels || []).find((c) =>
    /admins|updates|general/i.test(c.name),
  );
  if (prefer) sel.value = prefer.id;

  await refreshDiscord();
  await refreshTelegram();
}

async function refreshDiscord() {
  const channelId = $("discord-channel").value;
  const hist = await window.avaDesktop.history({ surface: "discord", channelId });
  renderHistory($("discord-history"), hist.messages);
  $("discord-status").textContent = hist.ok
    ? `loaded ${hist.messages?.length || 0} msgs`
    : hist.detail || "fail";
}

async function refreshTelegram() {
  const channelId = $("telegram-chat").value.trim();
  const hist = await window.avaDesktop.history({ surface: "telegram", channelId });
  renderHistory($("telegram-history"), hist.messages);
  $("telegram-status").textContent = `context ${hist.messages?.length || 0} msgs (local ring + send)`;
}

$("discord-refresh").onclick = refreshDiscord;
$("telegram-refresh").onclick = refreshTelegram;
$("discord-channel").onchange = refreshDiscord;

$("discord-send").onclick = async () => {
  const text = $("discord-draft").value.trim();
  if (!text) return;
  $("discord-status").textContent = "rewriting + sending…";
  try {
    const r = await window.avaDesktop.send({
      surface: "discord",
      channelId: $("discord-channel").value,
      text,
    });
    $("discord-draft").value = "";
    $("discord-status").textContent = `sent\nrewritten:\n${r.rewritten}`;
    await refreshDiscord();
  } catch (err) {
    $("discord-status").textContent = String(err.message || err);
  }
};

$("telegram-send").onclick = async () => {
  const text = $("telegram-draft").value.trim();
  if (!text) return;
  $("telegram-status").textContent = "rewriting + sending…";
  try {
    const r = await window.avaDesktop.send({
      surface: "telegram",
      channelId: $("telegram-chat").value.trim(),
      text,
    });
    $("telegram-draft").value = "";
    $("telegram-status").textContent = `sent\nrewritten:\n${r.rewritten}`;
    await refreshTelegram();
  } catch (err) {
    $("telegram-status").textContent = String(err.message || err);
  }
};

boot().catch((err) => {
  $("settings-status").textContent = String(err.message || err);
});
