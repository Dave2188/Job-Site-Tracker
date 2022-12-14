import mongoose from "mongoose";
const { Schema } = mongoose;

const jobSiteSchema = new Schema(
	{
		jobSiteName: String,
		location: String,
		companyName: String,
		directions: String,
		isReady: Boolean,
		createdBy: String,
		date: Date,
		siteSections: Array,
		gpsLocation: Boolean,
		jobComplete: Boolean,
	},
	{ timestamps: true },
	{ strict: false },
);

const JobSite = mongoose.model("JobSite", jobSiteSchema);

export default JobSite;
