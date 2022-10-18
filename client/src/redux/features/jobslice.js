import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		jobSiteName: "",
		location: "",
		directions: "",
		isReady: false,
		createdBy: "",
		createdAt: "",
		updatedAt: "",
		siteSection: {},
		isLoading: true,
	},
];

export const jobsSlice = createSlice({
	name: "jobs",
	initialState,
	reducers: {
		FETCH_ALL: (state, action) => {
			console.log(action.payload);
			return action.payload;
		},

		CREATE: (state, action) => {
			return [...state, action.payload];
		},
	},
});

console.log(jobsSlice);

export const { FETCH_ALL, CREATE } = jobsSlice.actions;

export default jobsSlice.reducer;
