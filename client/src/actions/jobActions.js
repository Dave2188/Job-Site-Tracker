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
		console.log("create");
		console.log(job);
		const { data } = await api.createJob(job);

		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error.message, "action");
	}
};

export const updateJob = (id, job) => async (dispatch) => {
	try {
		console.log("update");
		console.log(id);
		const { data } = await api.updateJob(id, job);

		dispatch({ type: "UPDATE", payload: data });
	} catch (error) {
		console.log(error.message, "action");
	}
};
