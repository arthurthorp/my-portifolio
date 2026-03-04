import { text, timestamp, uuid, pgSchema } from "drizzle-orm/pg-core";

export const internal = pgSchema("internal");

export const contacts = internal.table("contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
