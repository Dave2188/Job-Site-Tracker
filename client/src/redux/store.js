import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobslice";
import thunk from "redux-thunk";

export const store = configureStore({
	reducer: {
		jobs: jobsReducer,
	},
	middleware: [thunk],
});
