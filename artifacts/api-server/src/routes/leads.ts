import { Router, type IRouter, type Request, type Response, type NextFunction } from "express";
import { db, leadsTable, insertLeadSchema } from "@workspace/db";
import { desc } from "drizzle-orm";

const router: IRouter = Router();

function requireAdminToken(req: Request, res: Response, next: NextFunction) {
  const adminSecret = process.env.ADMIN_SECRET;
  if (!adminSecret) {
    res.status(503).json({ error: "Admin access not configured" });
    return;
  }
  const token = req.headers["x-admin-token"];
  if (token !== adminSecret) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}

router.post("/leads", async (req, res) => {
  const parsed = insertLeadSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input", details: parsed.error.issues });
    return;
  }

  try {
    const [lead] = await db.insert(leadsTable).values(parsed.data).returning();
    res.status(201).json({ id: lead.id, createdAt: lead.createdAt });
  } catch (err) {
    req.log.error(err, "Failed to insert lead");
    res.status(500).json({ error: "Failed to save submission" });
  }
});

router.get("/leads", requireAdminToken, async (req, res) => {
  try {
    const leads = await db.select().from(leadsTable).orderBy(desc(leadsTable.createdAt));
    res.json(leads);
  } catch (err) {
    req.log.error(err, "Failed to fetch leads");
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

export default router;
