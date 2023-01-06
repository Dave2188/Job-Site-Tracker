import { useState } from "react";
import { createUser } from "../actions/userActions";
import * as api from "../api";

export const useSignup = (email, password) => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);

	const signup = async (email, password) => {
		setIsLoading(true);
		setError(null);

		const { response } = await api.signup(email, password);
		console.log(response);

		try {
			//  setup catchblock for stupid axios
		} catch (error) {}

		// if (!data) {
		// 	setIsLoading(false);
		// 	setError(error);
		// 	console.log("hook error:", error);
		// }

		// if (data) {
		// 	localStorage.setItem("user", data);
		// }

		// send dispatch to store
	};

	return { signup, isLoading, error };
};
