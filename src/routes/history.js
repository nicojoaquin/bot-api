import { Router } from "express";
import {
  createHistory,
  addToHistory,
  getHistory,
} from "../controllers/history.js";

const router = Router();

router.post("/create/:userId", createHistory);
router.get("/:id", getHistory);
router.put("/add/user/:userId/phrase/:phraseId", addToHistory);

export default router;
