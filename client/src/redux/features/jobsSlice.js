import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
// 	{
// 		jobSiteName: "",
// 		location: "",
// 		directions: "",
// 		isReady: false,
// 		createdBy: "",
// 		createdAt: "",
// 		updatedAt: "",
// 		siteSection: {},
// 		isLoading: true,
// 	},
// ];

export const jobsSlice = createSlice({
	name: "jobs",
	initialState: [],
	reducers: {
		fetchAllJobs(state, action) {
			return action.payload;
		},

		createJob(state, action) {
			return [...state, action.payload];
		},

		updateJob(state, action) {
			return state.map((job) => (job.id === action.payload ? action.payload : job));
		},
	},
});

// console.log(jobsSlice);

export const { fetchAllJobs, createJob, updateJob } = jobsSlice.actions;

export default jobsSlice.reducer;
