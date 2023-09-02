import { baseApi } from "./baseApi";

export const bidApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		addBid: builder.mutation({
			query: ({ data, productId }) => ({
				url: `/bids/${productId}`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Bids"],
		}),

		getBids: builder.query({
			query: (params) => ({
				url: `bids/${params.productId}`,
				params,
			}),
			providesTags: ["Bids"],
		}),

		getUserBids: builder.query({
			query: (params) => ({
				url: `bids/user/${params.userId}`,
				params,
			}),
			providesTags: ["BidsByUser"],
		}),

		editBid: builder.mutation({
			query: ({ data, id }) => ({
				url: `/bids/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: ["Bids, BidsByUser"],
		}),

		deletebid: builder.mutation({
			query: ({ id }) => ({
				url: `/bids/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Bids", "BidsByUser"],
		}),
	}),
});

export const {
	useAddBidMutation,
	useGetUserBidsQuery,
	useGetBidsQuery,
	useEditBidMutation,
	useDeletebidMutation,
} = bidApi;
