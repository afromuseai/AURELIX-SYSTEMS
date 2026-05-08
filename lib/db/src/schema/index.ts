import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const LEAD_SOURCES = ["contact", "afromuse", "gtpro"] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

export const leadsTable = pgTable("leads", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  source: text("source").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leadsTable)
  .omit({ id: true, createdAt: true })
  .extend({
    email: z.string().email(),
    source: z.enum(LEAD_SOURCES),
  });

export const selectLeadSchema = createSelectSchema(leadsTable);

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leadsTable.$inferSelect;
