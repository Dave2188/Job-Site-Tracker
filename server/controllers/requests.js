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

	const newJob = new JobSite({
		jobSiteName: job.jobSiteName,
		location: job.location,
		companyName: job.companyName,
		directions: job.directions,
		isReady: job.isReady,
		createdBy: job.createdBy,
		date: job.createdOn,
		siteSections: job.siteSections,
		gpsLocation: job.gpsLocation,
		jobComplete: job.jobComplete,
	});

	try {
		await newJob.save();
		res.status(201).json(newJob);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateJob = async (req, res) => {
	console.log("servUpdate");
	const job = req.body;
	const { id: _id } = req.params;

	try {
		const updatedJob = await JobSite.findByIdAndUpdate(_id, { ..._id, ...job });
		console.log(updatedJob);
		// let newUpdatedJob = await JobSite.findById(_id);
		res.json(updatedJob);
	} catch (error) {
		console.log(error.message);
	}
};

export const deleteJob = async (req, res) => {
	console.log("serverDelete");

	const { id: _id } = req.params;

	try {
		const deletedJob = await JobSite.findByIdAndDelete(_id);
		res.json(deletedJob);
	} catch (error) {
		console.log(error.message);
	}
};
