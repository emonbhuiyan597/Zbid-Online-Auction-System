import jwt_decode from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";

const authCred = localStorage.getItem("auction_auth")
	? JSON.parse(localStorage.getItem("auction_auth"))
	: null;
const decodedUserData = authCred?.access ? jwt_decode(authCred?.access) : null;

const initialState = {
	access: authCred?.access ? authCred?.access : undefined,
	// refresh: undefined,
	user: decodedUserData ? decodedUserData : undefined,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		userLoggedIn: (state, { payload }) => {
			state.access = payload.access;
			// state.refresh = payload.refresh;
			state.user = payload.user;

			localStorage.setItem(
				"auction_auth",
				JSON.stringify({
					access: payload.access,
					// refresh: payload.refresh,
					user: payload.user,
				})
			);
		},
		userLoggedOut: (state) => {
			state.access = undefined;
			// state.refresh = undefined;
			state.user = undefined;
			localStorage.removeItem("auction_auth");
		},
	},
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
