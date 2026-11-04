---
name: Technical
details: How the website is built and hosted, and what is broken and why
type: doc
status: active
related: [flexboxes/web/, .flexos/spaces/20261104-bringing-in-aww-honey/01-what-is-broken/]
---

# Technical

## How it is built
- **Nuxt 4** (`nuxt ^4.4.0`), in the older layout: `pages/` at the top, no `app/` folder, no `app.vue`. Server route
  `server/api/signup.post.ts`. Styles `assets/kit.css`, loaded from `nuxt.config.ts`.
- **Database:** Neon, through `@neondatabase/serverless`.
- **Keys it reads:** `NEON_DATABASE_URL`.
- **Hosting:** Vercel project `aww-honey-test` (team flexos-projects), built from `flexboxes/web/` on every push, live
  at https://aww-honey-test.flexos.site. `vercel.json` (written when it was brought in: it had none) names Nuxt and skips a build when only
  `.flexos/` changed.
- **Run it:** in `flexboxes/web/`, `npm install`, then `npm run dev`. No lock file, so versions float.

## What is broken, and why (checked live, 4 November 2026)
1. **The home says 404.** There is no `pages/index.vue`; nothing answers at `/`.
2. **Every page but Sign up says 404**, `/roast` included: only `pages/signup.vue` exists.
3. **Sign up fails.** *Come in* gets a 500: `NEON_DATABASE_URL` is not set on this site ("Wrong URL scheme or missing
   user, host or database"). With the key, it would still keep only the email.
4. **Sign up is not sign-in.** The password is thrown away, there are no sessions, the page shows nothing after, and an
   email can be added twice.
5. **Sign up is unstyled.** The kit's cream and fonts are never applied: white, Times, the browser's own fields.
6. **No Honey.** No AI model is called anywhere; the chat, the roast and the memory have no code.
7. **Otp.dev** is listed as a service but nothing calls it, and no drawing asks for a phone number.
