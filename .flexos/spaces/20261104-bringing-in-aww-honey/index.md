---
name: Bringing in Aww Honey
details: The zip read end to end: what it is, what works, what does not
type: space
status: active
related: [.flexos/apps/web/, .flexos/docs/sources/01-aww-honey-zip/, .flexos/spaces/20261104-whats-broken/]
---

## What this is
Aww Honey as it came in a zip: a Nuxt site with one page, and its own notes describing eight screens and a Honey who
chats, roasts and remembers. Live at https://aww-honey-test.flexos.site since 4 Nov 09:42.

## What works
The sign-up page shows at `/signup`.

## What doesn't
Seven things, in *What's broken*: the home says 404; six drawn pages are not built, the Roast among them; sign-up
fails here (no database key); sign-up keeps only the email; nothing is styled; there is no Honey in the code (no AI);
Otp.dev is listed and never used.

## Three first things
1. The Roast at `/roast`: the hook, no sign-in, shows who Honey is fastest, and ends the 404 the old Monday brief flagged.
2. Real sign-up, Google first, with the four-screen onboarding already decided in *Rework onboarding*.
3. The quick fixes: a home, the database key on the site, the kit's look on every page.

In place, not a v2: one half-built page is live and nobody uses it.
