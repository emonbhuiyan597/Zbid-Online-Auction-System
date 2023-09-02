import jwt_decode from "jwt-decode";
import { baseApi } from "../apis/baseApi";
import { userLoggedIn } from "../slices/authSlice";

export const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		registration: builder.mutation({
			query: (data) => ({
				url: "/auth/register",
				method: "POST",
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;

					const decodedUserData = jwt_decode(data.access);

					dispatch(
						userLoggedIn({
							access: data.access,
							refresh: data.refresh,
							user: decodedUserData,
						})
					);
				} catch (err) {
					// do nothing
				}
			},
		}),

		login: builder.mutation({
			query: (data) => ({
				url: "/auth/login",
				method: "POST",
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					const decodedUserData = jwt_decode(data.token);

					dispatch(
						userLoggedIn({
							access: data.token,
							user: decodedUserData,
						})
					);
				} catch (err) {
					// do nothing
				}
			},
		}),
	}),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
