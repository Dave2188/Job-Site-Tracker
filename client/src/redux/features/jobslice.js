import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	jobSiteName: "",
	location: "",
	directions: "",
	isReady: false,
	createdBy: "",
	createdAt: "",
	updatedAt: "",
	siteSection: {},
	isLoading: true,
};

const jobSlice = createSlice({ name: "job", initialState });

console.log(jobSlice);

export default jobSlice.reducer;
