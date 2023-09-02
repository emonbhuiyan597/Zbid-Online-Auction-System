import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getContacts: builder.query({
			query: (params) => ({
				url: `/contacts`,
				params,
			}),
			providesTags: ["Contacts"],
		}),

		addContact: builder.mutation({
			query: ({ data }) => ({
				url: "/contacts",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Contacts"],
		}),

		editContact: builder.mutation({
			query: ({ data, id }) => ({
				url: `/contacts/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: ["Contacts"],
		}),

		deleteContact: builder.mutation({
			query: ({ id }) => ({
				url: `/contacts/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Contacts"],
		}),
	}),
});

export const {
	useGetContactsQuery,
	useAddContactMutation,
	useDeleteContactMutation,
	useEditContactMutation,
} = categoryApi;
