import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobsSlice";
import thunk from "redux-thunk";

export const store = configureStore({
	reducer: {
		jobs: jobsReducer,
	},
	middleware: [thunk],
});
