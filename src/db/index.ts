import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Connection string should be safely stored in environment variables.
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/my-portfolio';

// Disable prefetch as it is not supported for "Transaction" pool mode in some managed DBs (e.g., Supabase)
// If you are using Supabase or similar connection poolers, keep prepare: false.
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, { schema });
