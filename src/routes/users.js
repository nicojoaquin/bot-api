import { Router } from "express";
import { createUser, getUsers, getUser } from "../controllers/users.js";

const router = Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);

export default router;
