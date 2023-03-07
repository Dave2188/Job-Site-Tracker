import { createSlice } from "@reduxjs/toolkit";

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
			return state.map((job) => (job._id === action.payload ? action.payload : job));
		},
	},
});

export const { fetchAllJobs, createNewJob, updateCurrentJob } = jobsSlice.actions;

export default jobsSlice.reducer;
