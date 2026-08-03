# 1h Worker cron → Ava idea / PROP (gated on Grok)

**Status:** planned · **Owner:** Ava + Alex  
**Seeded:** 2026-08-02  
**Surface:** https://ava.rootmc.net/ (live status tunnel) · Worker cron on `rootmc-api`  
**Gate:** buy / restore **Grok** dream usage first (cloud-dark until then)

---

## Intent

Once Grok credits are available again:

1. **1h Cloudflare Worker cron** fires  
2. Dream brain (Grok) invents **one RootMC-centric build idea**  
3. Idea is queued / formalized as a **PROP** (vote surface) for Ava to build if it passes  
4. Ava status page / Slack dig can show “hourly idea fired” — not Discord spam

---

## Hard gates (stay locked)

- **No PROP spam while cloud-dark** — don't fake ideas without Grok  
- Player features still need **proposal + vote** (majority / 75% rules)  
- Digs stay on **Slack**; Discord only for the formal PROP / player-facing note  
- Don't duplicate Official Worker crons carelessly — extend or add one clear trigger (`rootmc-bot-parity.md`)  
- Never mint Gold for vanity ideas  

---

## Shape (when unlocked)

| Step | Who | Notes |
|------|-----|--------|
| Cron `0 * * * *` (or existing hourly) | Worker | Call Ava/dream idea endpoint or enqueue D1 row |
| Generate idea | Grok / dream | RootMC-centric, small enough to ship, tag `army:<dept>` |
| Formalize | Ava `proposalIdeas` / governance API | Same path as `/proposal` queue |
| Vote | Council / players | Ava auto-for on her seat only when appropriate |
| Build | Ava Engineering after pass | FileZilla / jar only with Alex gates |

---

## Preconditions checklist

- [ ] Grok / xAI usage purchased and `AVA_GROK_API_KEY` (or current dream key) healthy  
- [ ] Cloud-dark cleared  
- [ ] Worker cron + secret auth to Ava or D1 queue  
- [ ] Rate: **1 idea / hour max** (skip if open PROP backlog high)  
- [ ] Ava watches queue (already drains `processPendingProposalIdeas`)

---

## Related

- Status: https://ava.rootmc.net/  
- Formalize path: `Web Files/rootmc-ava/src/proposalIdeas.mjs`  
- Dream: `dreamBrain.mjs` · model `AVA_GROK_MODEL`  
- Worker forever list: `notes/rootmc-bot-parity.md`
