import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: (params) => ({
				url: `/users`,
				params,
			}),
		}),
		getUser: builder.query({
			query: (email) => ({
				url: `/user/${email}`,
			}),
		}),
	}),
});

export const { useGetUsersQuery, useGetUserQuery } = userApi;
