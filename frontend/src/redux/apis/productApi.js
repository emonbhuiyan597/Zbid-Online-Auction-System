import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: (params) => ({
				url: `/products`,
				params,
			}),
			providesTags: ["Products"],
		}),

		getRelatedProducts: builder.query({
			query: (productId) => ({
				url: `/products/related/${productId}`,
			}),
			providesTags: ["RelatedProducts"],
		}),

		getVendorProducts: builder.query({
			query: (params) => ({
				url: `products/vendor-products`,
				params,
			}),
			providesTags: ["VendorProducts"],
		}),

		getProduct: builder.query({
			query: ({ productId }) => ({
				url: `/products/${productId}`,
			}),
			providesTags: (_result, _error, arg) => [{ type: "Products", id: arg }],
			invalidatesTags: ["RelatedProducts"],
		}),

		addProduct: builder.mutation({
			query: ({ data }) => ({
				url: "/products",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["VendorProducts", "Products"],
		}),

		editProduct: builder.mutation({
			query: ({ data, id }) => ({
				url: `/products/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: (_result, _error, arg) => [
				{ type: "Products", id: arg.id },
				"VendorProducts",
			],
		}),

		deleteProduct: builder.mutation({
			query: ({ id }) => ({
				url: `/products/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["VendorProducts", "Products"],
		}),

		productPayment: builder.mutation({
			query: ({ id }) => ({
				url: `/products/payment/${id}`,
				method: "GET",
			}),
			invalidatesTags: ["VendorProducts", "Products", "ProductDetail"],
		}),
	}),
});

export const {
	useGetProductQuery,
	useGetVendorProductsQuery,
	useGetProductsQuery,
	useAddProductMutation,
	useEditProductMutation,
	useDeleteProductMutation,
	useProductPaymentMutation,
	useGetRelatedProductsQuery,
} = productApi;
