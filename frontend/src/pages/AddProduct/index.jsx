/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import { useGetCategoriesQuery } from "../../redux/apis/categoryApi";
import {
	useAddProductMutation,
	useEditProductMutation,
} from "../../redux/apis/productApi";
import ErrorDisplay from "../../components/ErrorDisplay";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const initialData = {
	name: "",
	description: "",
	minBidPrice: 0,
	startDate: new Date(),
	endDate: new Date(),
	category: 0,
};

const AddProduct = () => {
	const { state } = useLocation();
	const product = state?.product;
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const [image, setImage] = useState();
	const [productData, setProductData] = useState(
		product
			? {
					...product,
					category: product?.category._id,
					startDate: product?.startDate.slice(0, 10),
					endDate: product?.endDate.slice(0, 10),
			  }
			: initialData
	);

	const { data: categories } = useGetCategoriesQuery({});
	const [addProduct, { isLoading, isSuccess, isError, error }] =
		useAddProductMutation();
	const [
		editProduct,
		{ isLoading: isEditLoading, isSuccess: isEditSuccess, error: editError },
	] = useEditProductMutation();

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", productData.name);
		formData.append("description", productData.description);
		formData.append("minBidPrice", productData.minBidPrice);
		formData.append("startDate", productData.startDate);
		formData.append("endDate", productData.endDate);
		formData.append("category", productData.category);
		if (image) formData.append("image", image);

		if (product) {
			editProduct({ data: formData, id: product?._id });
		} else {
			console.log("formData =>", formData);
			addProduct({ data: formData });
		}
	};

	const handleChange = (e) => {
		setProductData({ ...productData, [e.target.name]: e.target.value });
	};

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	useEffect(() => {
		if (isSuccess) {
			setProductData(initialData);
			toast.success("Product created");
		}
		if (isEditSuccess) {
			console.log(window.location);
			toast.success("Product updated");
			window.location.replace(window.location.origin + "/profile");
		}
	}, [isSuccess, isEditSuccess, navigate]);

	useEffect(() => {
		if (!user?.vendor) {
			navigate("/");
		}
	}, [user, navigate]);

	return (
		<section className="w-full   md:w-6/12 lg:4/12 shadow p-6 mx-auto mt-4">
			<h2 className="text-3xl text-center mb-2">Create new auction</h2>
			<p className="text-center">Please provide required information</p>

			{(isError || editError) && <ErrorDisplay error={error || editError} />}

			<form className="mt-8 flex flex-col gap-y-4" onSubmit={handleSubmit}>
				<Input
					label="Product Name"
					name={"name"}
					type={"text"}
					value={productData.name}
					onChange={handleChange}
					placeholder={"Ex. Wooden Chair"}
					required
				/>
				<TextArea
					label="Description"
					name={"description"}
					type={"text"}
					value={productData.description}
					onChange={handleChange}
					placeholder={"Ex. Lorem ipsum dolor"}
					required
				/>
				<Input
					label="Min bid price"
					name={"minBidPrice"}
					type={"number"}
					value={productData.minBidPrice}
					onChange={handleChange}
					placeholder={"500"}
					required
				/>
				<Input
					label="Bid start date"
					name={"startDate"}
					type={"date"}
					value={productData.startDate}
					onChange={handleChange}
					required
				/>
				<Input
					label="Bid end date"
					name={"endDate"}
					type={"date"}
					value={productData.endDate}
					onChange={handleChange}
					required
				/>
				<Select
					required
					label="Select Category"
					value={productData.category}
					name="category"
					options={categories?.map((cat) => {
						return { value: cat._id, label: cat.name };
					})}
					onChange={handleChange}
				/>
				<Input
					label="Product Image"
					name="image"
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					required={!product}
				/>

				<Button fullWidth type="submit" disabled={isLoading || isEditLoading}>
					Submit
				</Button>
			</form>
		</section>
	);
};

export default AddProduct;
