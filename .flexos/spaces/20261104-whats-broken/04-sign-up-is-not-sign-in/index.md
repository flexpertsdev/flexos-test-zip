---
name: Sign-up is not sign-in
details: Keeps the email, throws the password away, signs nobody in
type: topic
status: active
related: [.flexos/apps/web/brief/03-features/04-email-sign-up/, .flexos/apps/web/brief/03-features/01-sign-in-with-google/, .flexos/spaces/20261104-rework-onboarding/]
---

## What this is
Even with its key, sign-up writes one email to `users`: the password is dropped, there is no session, the page says nothing after, and the same email can sign up twice.

## Decided
- Not fixed yet.

## Next
- Real sign-in, Google first (feature *Sign in with Google*), drawn with the four-screen onboarding.
