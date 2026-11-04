import { neon } from '@neondatabase/serverless'
export default defineEventHandler(async (event) => {
  const { email } = await readBody<{ email: string }>(event)
  const sql = neon(process.env.NEON_DATABASE_URL!)
  await sql`insert into users (email) values (${email})`
  return { ok: true }
})
