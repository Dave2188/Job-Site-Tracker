import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: null,
	reducers: {
		login(state, action) {
			return action.payload;
		},
		logout(state, action) {
			return { ...state, user: null };
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
