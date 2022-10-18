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
