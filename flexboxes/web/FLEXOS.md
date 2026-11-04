# How this site is built

Aww Honey's website: Nuxt 4, live at https://aww-honey-test.flexos.site (Vercel project `aww-honey-test`, built from
this folder on every push to `main`).

- **Pages:** `pages/` (the older Nuxt layout: no `app/` folder, no `app.vue`). One page today, `pages/signup.vue`.
  Every page is drawn first in `.flexos/apps/web/brief/02-pages/NN-<page>/page.html`; build from the drawing.
- **Server:** `server/api/`. One route, `signup.post.ts`, writes to Neon.
- **Styles:** Honey's kit, `assets/kit.css` (`--cream`, `--ink`, `--go`, `.go`), loaded in `nuxt.config.ts`. The look
  in words: `.flexos/apps/web/brief/01-design/index.md`.
- **Data:** Neon, `@neondatabase/serverless`, key `NEON_DATABASE_URL` (never in a file).
- **Run it:** `npm install`, then `npm run dev`.
- **Deploys:** `vercel.json` names Nuxt and skips a build when only `.flexos/` changed.
- What is broken and why: `.flexos/apps/web/brief/07-technical/index.md`.
