# FlexOS shape test

Two tests of the FlexOS folder system, run in Claude Code with this repo as the working folder:

1. **A new project:** start a session and describe a business ("I want to start a dog-sitting business in Leeds").
   Talk as you would to Flexi. After each turn, look at what it wrote and where under `.flexos/`.
2. **Bring in a project:** a website zip is in `inbox/` (`aww-honey.zip`, set up for this run). Say "I brought in my
   website, it's in inbox/". Watch it unzip, put it live, scan, write the Library and the brief, and get you to
   "I can work on this".

`CLAUDE.md` is the whole system: the shape, the header every file wears, the rules, and both procedures.

## Where it is live

- **Website** (`flexboxes/web/`): Vercel project `aww-honey-test` (team flexos-projects) at
  https://aww-honey-test.flexos.site, built on every push to `claude/great-turing-gkl694`. A holding page until the
  import puts real code there.
- **Website v2** (`flexboxes/web-v2/`, only if one is started): `aww-honey-test-v2` at
  https://aww-honey-test-v2.flexos.site.

The real Aww Honey project (Vercel `aww-honey`, `aww-honey-flexapp`) is separate and untouched.
