import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./features/jobsSlice";
import userReducer from "./features/userSlice";
import thunk from "redux-thunk";

export const store = configureStore({
	reducer: {
		jobs: jobsReducer,
		user: userReducer,
	},
	middleware: [thunk],
});
