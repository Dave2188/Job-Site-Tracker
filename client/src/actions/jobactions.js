import * as api from "../api";

export const getJobs = () => async (dispatch) => {
	try {
		const { data } = await api.fetchJobs();
		console.log(data);

		dispatch({ type: "FETCH_ALL", payload: data });
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
