import * as api from "../api";
import { login } from "../redux/features/userSlice";

export const createUser = async (dispatch) => {
	try {
		const { data } = await api.signup();
	} catch (error) {
		console.log(error.message);
	}
};
