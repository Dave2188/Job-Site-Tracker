import * as api from "../api";
import { fetchAllJobs } from "../redux/features/jobsSlice";

export const getJobs = () => async (dispatch) => {
	try {
		const { data } = await api.fetchJobs();

		dispatch(fetchAllJobs(data));
	} catch (error) {
		console.log(error.message);
	}
};

export const createJob = (job) => async (dispatch) => {
	try {
		console.log("jobActions.js");
		console.log(job);
		const { data } = await api.createJob(job);

		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error.message, "action");
	}
};
