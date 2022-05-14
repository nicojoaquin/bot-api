import { Router } from "express";
import { createPhrase, getPhrases, getPhrase } from "../controllers/phrases.js";

const router = Router();

router.post("/create/:userId", createPhrase);
router.get("/", getPhrases);
router.get("/:id", getPhrase);

export default router;
