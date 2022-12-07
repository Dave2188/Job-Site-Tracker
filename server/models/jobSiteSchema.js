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
		gpsLocation: { type: Boolean, default: "false" },
	},
	{ timestamps: true },
);

const JobSite = mongoose.model("JobSite", jobSiteSchema);

export default JobSite;
