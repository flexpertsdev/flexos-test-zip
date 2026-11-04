---
name: Sign up
details: /signup, built
type: page
status: active
path: /signup
related: [.flexos/apps/web/brief/04-flows/01-onboarding/, .flexos/apps/web/brief/04-flows/02-roast/, .flexos/apps/web/brief/03-features/01-sign-in-with-google/, .flexos/apps/web/brief/03-features/04-email-sign-up/, .flexos/spaces/20261104-rework-onboarding/01-fewer-steps/]
---

# Sign up

**Path:** `/signup`

**Built:** yes, `flexboxes/web/pages/signup.vue`.

## What it shows
Honey: "Let's get you in." The heading *Make your space*, an email field, a password field, *or continue with Google*, one button.

## The one thing to do
Make an account.

## As built
The same words, but the button says *Come in* and there is no Google. Unstyled: white, in Times, the browser's own
fields. *Come in* sends the email and password to `/api/signup`, which keeps only the email (the password is thrown
away), signs nobody in and shows nothing after. On this site it fails (see `07-technical/`).

## Versions
`versions/v1.html` *Create an account*, three fields, "Please fill in the form." · `versions/v2.html` *Make your
space*, two fields, warmer · `page.html` adds *or continue with Google*.
