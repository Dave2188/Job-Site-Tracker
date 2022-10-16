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

// app.get("/", function (req, res) {
// 	res.send("Hello World");
// });
