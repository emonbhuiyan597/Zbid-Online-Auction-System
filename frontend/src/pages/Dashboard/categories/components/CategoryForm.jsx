/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import {
	useAddCategoryMutation,
	useEditCategoryMutation,
} from "../../../../redux/apis/categoryApi";
import ErrorDisplay from "../../../../components/ErrorDisplay";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { toast } from "react-toastify";

const initialState = {
	name: "",
};

const CategoryForm = ({ category, onClose }) => {
	const [addCategory, { isLoading, isError, error, isSuccess }] =
		useAddCategoryMutation();
	const [
		editCategory,
		{
			isLoading: isEditLoading,
			isEditError,
			error: editError,
			isSuccess: isEditSuccess,
		},
	] = useEditCategoryMutation();

	const [categoryData, setCategoryData] = useState(category || initialState);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = { name: categoryData?.name };
		if (category) {
			editCategory({ data, id: category?._id });
			onClose();
		} else {
			addCategory({ data });
			onClose();
		}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success("Category created!");
			console.log("create");
		}
		if (isEditSuccess) {
			toast.success("Category updated!");
			console.log("edit");
		}
	}, [isSuccess, isEditSuccess]);

	return (
		<div>
			<h4 className="mb-6 text-2xl">Edit Category</h4>
			{(isError || isEditError) && <ErrorDisplay error={error || editError} />}

			<div className="flex flex-col gap-y-4">
				<Input
					label="Category Name"
					name={"name"}
					type={"text"}
					value={categoryData?.name}
					placeholder={"Category Name"}
					onChange={(e) =>
						setCategoryData({ ...categoryData, name: e.target.value })
					}
				/>

				<Button onClick={handleSubmit} disabled={isLoading || isEditLoading}>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default CategoryForm;
