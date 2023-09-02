import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/baseApi";
import authSliceReducer from "./slices/authSlice";
import productSliceReducer from "./slices/productSlice";

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		auth: authSliceReducer,
		product: productSliceReducer,
	},
	devTools: import.meta.env.DEV,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(baseApi.middleware),
});
