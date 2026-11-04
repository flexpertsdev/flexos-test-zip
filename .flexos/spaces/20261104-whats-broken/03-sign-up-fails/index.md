---
name: Sign-up fails
details: Come in gets a 500: no database key on this site
type: topic
status: active
related: [.flexos/connections/neon/, .flexos/spaces/20261104-bringing-in-aww-honey/03-keys-for-the-site/]
---

## What this is
The server route reads `NEON_DATABASE_URL`; it is not set on aww-honey-test. Vercel's log: "Wrong URL scheme or missing user, host or database". Nothing on screen says it failed.

## Decided
- Not fixed yet.

## Next
- The key through the Vault; then the `users` table checked in Neon.
