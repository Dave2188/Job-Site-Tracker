import { useDispatch } from "react-redux";
import { logout } from "../redux/features/userSlice";

export const useLogout = () => {
	const dispatch = useDispatch();

	const logoutUser = () => {
		localStorage.removeItem("user");

		dispatch(logout());
	};
	return { logoutUser };
};
