import express from "express";
import { createJob, getJobs, updateJob } from "../controllers/requests.js";
import bodyParser from "body-parser";

const router = express.Router();

const jsonParser = bodyParser.json();

router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJob);

export default router;
