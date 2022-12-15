import * as api from "../api";
import { fetchAllJobs, createNewJob, updateCurrentJob } from "../redux/features/jobsSlice";

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

		dispatch(createNewJob(data));
	} catch (error) {
		console.log(error.message, "action");
	}
};

export const updateJob = (id, job) => async (dispatch) => {
	try {
		console.log("update");

		const { data } = await api.updateJob(id, job);

		dispatch(updateCurrentJob(data));
	} catch (error) {
		console.log(error.message, "action");
	}
};

export const deleteJob = (id) => async (dispatch) => {
	try {
		console.log("delete");
		console.log("id");

		await api.deleteJob(id);

		getJobs();
	} catch (error) {
		console.log(error.message);
	}
};
