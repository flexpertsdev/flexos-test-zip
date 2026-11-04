---
name: Neon for the website
details: Where the website keeps its records
type: connection
status: active
related: [.flexos/connections/neon/, .flexos/apps/web/brief/05-data/]
---

# Neon

The website keeps users, chats and memories in Neon. Today one call uses it: `server/api/signup.post.ts` writes the
email into `users`, through `@neondatabase/serverless`, at the address in `NEON_DATABASE_URL`. That key is not on this
site yet, so every sign-up fails here.
