import JobSite from "../models/jobSiteSchema.js";
import mongoose from "mongoose";

export const getJobs = async (request, response) => {
	try {
		const jobs = await JobSite.find();

		response.status(200).json(jobs);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

export const createJob = async (req, res) => {
	console.log("request.js");
	const job = req.body;
	const newJob = new JobSite(job);
	try {
		await newJob.save();
		res.status(201).json(newJob);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

// app.get("/", function (req, res) {
// 	res.send("Hello World");
// });
