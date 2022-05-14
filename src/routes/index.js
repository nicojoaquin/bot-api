import { Router } from "express";
import historyRouter from "./history.js";
import phrasesRouter from "./phrases.js";
import usersRouter from "./users.js";

const router = Router();

router.use("/history", historyRouter);
router.use("/phrases", phrasesRouter);
router.use("/users", usersRouter);

export default router;
