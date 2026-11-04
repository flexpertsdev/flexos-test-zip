---
name: Sign up with email
details: Built, and broken: keeps the email, throws the password away
type: feature
status: active
related: [.flexos/apps/web/brief/02-pages/02-sign-up/, .flexos/connections/neon/, .flexos/spaces/20261104-whats-broken/]
---

# Sign up with email

Email and a password on Sign up make an account.

**Uses:** Sign up.

**Built:** yes, `pages/signup.vue` and `server/api/signup.post.ts`, and broken: it writes the email into Neon's `users` table and nothing else. No password is kept, nobody is signed in, the page says nothing after, and the same email can sign up twice.
