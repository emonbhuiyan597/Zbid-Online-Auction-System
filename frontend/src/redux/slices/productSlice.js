import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedCategory: null,
	params: {
		auctionStatus: "",
		limit: 30,
		offset: 0,
	},
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		selectCategory: (state, { payload }) => {
			if (state.selectedCategory === payload) {
				state.selectedCategory = null;
			}
			state.selectedCategory = payload;
		},

		setParams: (state, { payload }) => {
			state.params[payload.key] = payload.value;
		},
	},
});

export const { selectCategory, setParams } = productSlice.actions;
export default productSlice.reducer;
