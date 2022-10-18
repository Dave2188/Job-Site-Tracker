import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobslice";

export const store = configureStore({
	reducer: {
		jobs: jobsReducer,
	},
});
