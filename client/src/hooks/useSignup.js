import { useState } from "react";
import { login } from "../redux/features/userSlice";
import * as api from "../api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSignup = (email, password) => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signup = async (email, password) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await api.signup(email, password);
			console.log(response.data);

			localStorage.setItem("user", JSON.stringify(response.data));

			dispatch(login(JSON.stringify(response.data)));

			setIsLoading(false);

			navigate("/");
		} catch (error) {
			setIsLoading(false);

			setError(error.response.data.error);

			console.log("hook error:", error.response.data.error);
		}
	};

	return { signup, isLoading, error };
};
