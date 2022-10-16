import mongoose from "mongoose";

const jobSiteSchema = new mongoose.Schema({
	jobSiteName: String,
	location: String,
	directions: String,
	isReady: Boolean,
	createdBy: String,
	createdAt: Date,
	updatedAt: Date,
	siteSection: {
		sectionName: String,
		materials: Array,
		equipment: String,
		comments: String,
	},
});

const JobSite = mongoose.model("JobSite", jobSiteSchema);

export default JobSite;
