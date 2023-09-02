import { baseApi } from "./baseApi";

export const categoryApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: (params) => ({
				url: `/categories`,
				params,
			}),
			providesTags: ["Categories"],
		}),

		addCategory: builder.mutation({
			query: ({ data }) => ({
				url: "/categories",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Categories"],
		}),

		editCategory: builder.mutation({
			query: ({ data, id }) => ({
				url: `/categories/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: ["Categories"],
		}),

		deleteCategory: builder.mutation({
			query: ({ id }) => ({
				url: `/categories/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Categories"],
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useAddCategoryMutation,
	useEditCategoryMutation,
	useDeleteCategoryMutation,
} = categoryApi;
