import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./features/jobslice";

export const store = configureStore({
	reducer: {
		job: jobReducer,
	},
});
