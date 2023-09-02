import { baseApi } from "./baseApi";

export const statisticsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getSummary: builder.query({
			query: () => ({
				url: `/statistics/summary`,
			}),
		}),
	}),
});

export const { useGetSummaryQuery } = statisticsApi;
