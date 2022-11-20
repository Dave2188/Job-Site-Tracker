import * as api from "../api";

export const getJobs = () => async (dispatch) => {
	try {
		const { data } = await api.fetchJobs();
		console.log(data);

		dispatch({ type: "", payload: data });
	} catch (error) {
		console.log(error.mesage);
	}
};

export const createJob = (jobData) => async (dispatch) => {
	try {
		console.log("jobactions.js");
		const { data } = await api.createJob(jobData);
		console.log();
		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error.message, "action");
	}
};
