---
name: Data
details: What the website keeps: planned users, chats, memories; today only an email
type: doc
status: active
related: [.flexos/connections/neon/, .flexos/apps/web/brief/06-connections/neon.md]
---

# Data

All of it in Neon (a Postgres database).

| Table | Fields | In the code today |
|---|---|---|
| users | email, name, plan | Sign up writes `email` only. Nothing makes the table; whether it exists in the database is not known from here. |
| chats | who, when, words | Not used. |
| memories | what Honey keeps | Not used, not made (Neon's to-do). |

No password, name or plan is kept anywhere.
