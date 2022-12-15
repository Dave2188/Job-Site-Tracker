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

		createNewJob(state, action) {
			return [...state, action.payload];
		},

		updateCurrentJob(state, action) {
			console.log(action);
			return state.map((job) => (job._id === action.payload ? action.payload : job));
		},
	},
});

// console.log(jobsSlice);

export const { fetchAllJobs, createNewJob, updateCurrentJob } = jobsSlice.actions;

export default jobsSlice.reducer;
