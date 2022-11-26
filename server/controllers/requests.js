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
	console.log("request");
	const job = req.body;

	console.log(job);
	const newJob = new JobSite({
		jobSiteName: job.jobSiteName,
		location: job.location,
		companyName: job.companyName,
		directions: job.directions,
		isReady: job.isReady,
		createdBy: job.createdBy,
		date: job.createdOn,
		siteSections: job.siteSections,
	});
	console.log(job);

	try {
		await newJob.save();
		res.status(201).json(newJob);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
