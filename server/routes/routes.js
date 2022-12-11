import express from "express";
import { createJob, getJobs, updateJob, deleteJob } from "../controllers/requests.js";
import bodyParser from "body-parser";

const router = express.Router();

// const jsonParser = bodyParser.json();

router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;
