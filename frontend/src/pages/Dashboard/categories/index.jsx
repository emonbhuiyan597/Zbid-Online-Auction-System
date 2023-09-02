import { format } from "date-fns";
import Loader from "../../../components/Loader";
import ErrorDisplay from "../../../components/ErrorDisplay";
import {
	useDeleteCategoryMutation,
	useGetCategoriesQuery,
} from "../../../redux/apis/categoryApi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../../components/Modal";
import CategoryForm from "./components/CategoryForm";
import Button from "../../../components/Button";

const Categories = () => {
	const {
		data: categories,
		isLoading,
		isError,
		error,
	} = useGetCategoriesQuery();

	

	const [
		deleteCategory,
		{ isError: isDeleteError, error: deleteError, isSuccess },
	] = useDeleteCategoryMutation();

	const [editCat, setEditCat] = useState(null);
	const [open, setOpen] = useState(false);

	const handleDelete = (cat) => {
		const confirm = window.confirm("Are you sure to delete this category?");
		if (confirm) {
			deleteCategory({ id: cat._id });
		}
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success("Successfully deleted");
		}
	}, [isSuccess]);

	return (
		<div>
			<h4 className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white mb-6 transition">
				All Categories
			</h4>
			<div className="flex  justify-end mb-4">
				<Button onClick={() => setOpen(true)} 
				>Add Category</Button>
				
			</div>
			<div className="shadow p-4 rounded w-full overflow-auto">
				{isLoading ? (
					<Loader />
				) : isError || isDeleteError ? (
					<ErrorDisplay error={error || deleteError} />
				) : (
					<table className="min-w-full border">
						<thead className="bg-white border-b">
							<tr className="bg-gray-100">
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Full Name
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Created At
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{categories?.map((cat) => (
								<tr key={cat?._id} className="border-b">
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{cat?.name}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{format(new Date(cat?.createdAt), "dd-MM-yyyy")}
									</td>
									<td className="flex gap-2 items-center mt-2">
										<button
											onClick={() => setEditCat(cat)}
											className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded"
										>
											Edit
										</button>
										<button
											onClick={() => handleDelete(cat)}
											className="bg-red-500 hover:bg-red-700 text-sm text-white font-medium py-2 px-2 rounded"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>

			{/* edit modal */}
			{editCat && (
				<Modal isOpen={editCat} onClose={() => setEditCat(null)}>
					<CategoryForm category={editCat} onClose={() => setEditCat(null)} />
				</Modal>
			)}

			{/* create modal */}
			{open && (
				<Modal isOpen={open} onClose={() => setOpen(false)}>
					<CategoryForm onClose={() => setOpen(false)} />
				</Modal>
			)}
		</div>
	);
};

export default Categories;
