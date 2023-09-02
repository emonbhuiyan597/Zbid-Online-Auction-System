/* eslint-disable no-unused-vars */

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../components/SectionTitle";
import { useGetProductsQuery } from "../../redux/apis/productApi";
import NoDataFound from "../../components/NoDataFound";
import Loader from "../../components/Loader";
import ErrorDisplay from "../../components/ErrorDisplay";
import Button from "../../components/Button";
import LeftDrawer from "./components/LeftDrawer";
import { useGetCategoriesQuery } from "../../redux/apis/categoryApi";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setParams } from "../../redux/slices/productSlice";

const Products = () => {
	const dispatch = useDispatch();
	const { params, selectedCategory } = useSelector((state) => state.product);
	const [showDrawer, setShowDrawer] = useState(false);

	const {
		data: products,
		isLoading,
		isError,
		error,
	} = useGetProductsQuery(params);
	const { data: categories } = useGetCategoriesQuery({});

	const handleSetParams = (key, value) => {
		dispatch(setParams({ key, value }));
	};

	const handleShowDrawer = () => {
		setShowDrawer((prev) => !prev);
	};

	const handleChangeCategory = (e) => {
		const value = e.target.value;
		dispatch(selectCategory(value));
		dispatch(setParams({ key: "category", value }));
	};

	return (
		<section className="relative mt-4">
			<SectionTitle title={"Available Products"} />
			<div className="flex justify-end border-b pb-4 border-slate-300">
				
				<Button onClick={handleShowDrawer}>Filter</Button>
			</div>

			{showDrawer && (
				<>
					<LeftDrawer
						handleSetParams={handleSetParams}
						handleShowDrawer={handleShowDrawer}
						params={params}
						categories={categories}
						handleChangeCategory={handleChangeCategory}
						category={selectedCategory}
					/>
					<div className="fixed top-0 left-0 w-full h-full z-40 bg-slate-200 bg-opacity-40"></div>
				</>
			)}

			<div className="flex flex-wrap mt-4">
				{isLoading ? (
					<Loader />
				) : isError ? (
					<ErrorDisplay error={error} />
				) : products?.length > 0 ? (
					products?.map((product) => (
						<ProductCard key={product?._id} product={product} />
					))
				) : (
					<div className="w-full">
						<NoDataFound />
					</div>
				)}
			</div>
		</section>
	);
};

export default Products;
