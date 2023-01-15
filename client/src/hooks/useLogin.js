import { useState } from "react";
import { login } from "../redux/features/userSlice";
import * as api from "../api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogin = (email, password) => {
	const [loginError, setLoginError] = useState(null);
	const [loginIsLoading, setLoginIsLoading] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginUser = async (email, password) => {
		setLoginIsLoading(true);
		setLoginError(null);

		try {
			const response = await api.login(email, password);
			console.log(response.data);

			localStorage.setItem("user", JSON.stringify(response.data));

			dispatch(login(JSON.stringify(response.data)));

			setLoginIsLoading(false);

			navigate("/");
		} catch (error) {
			setLoginIsLoading(false);

			setLoginError(error.response.data.error);

			console.log("hook error:", error.message);
		}
	};

	return { loginUser, loginIsLoading, loginError };
};
