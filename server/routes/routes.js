import express from "express";
import { createJob, getJobs } from "../controllers/requests.js";
import bodyParser from "body-parser";

const router = express.Router();

const jsonParser = bodyParser.json();

router.get("/", getJobs);
router.post("/", createJob);

export default router;
