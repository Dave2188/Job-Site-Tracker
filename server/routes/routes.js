import express from "express";
import { createJob, getJobs, updateJob, deleteJob } from "../controllers/requests.js";

const router = express.Router();

router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;
