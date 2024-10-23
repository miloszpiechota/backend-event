// routes/category.js
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// Get all categories
router.get("/", async (req, res) => {
    try {
        const categories = await prisma.event_categories.findMany();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export default router;
