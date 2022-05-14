import "dotenv/config";
import cors from "cors";
import express from "express";

import { dbConnection } from "./config/db.js";
import apiRouter from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 4000;

dbConnection();

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
