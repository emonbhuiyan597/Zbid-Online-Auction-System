import { format } from "date-fns";
import Loader from "../../../components/Loader";
import ErrorDisplay from "../../../components/ErrorDisplay";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../../components/Modal";

import {
	useDeleteContactMutation,
	useGetContactsQuery,
} from "../../../redux/apis/contactApi";
import ContactDetails from "./components/ContactDetails";

const Contacts = () => {
	const { data: contacts, isLoading, isError, error } = useGetContactsQuery();

	const [
		deleteContact,
		{ isError: isDeleteError, error: deleteError, isSuccess },
	] = useDeleteContactMutation();

	const [editContact, setEditContact] = useState(null);

	const handleDelete = (contact) => {
		const confirm = window.confirm("Are you sure to delete this contact?");
		if (confirm) {
			deleteContact({ id: contact._id });
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
			
				All Contacts
			</h4>
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
									Email
								</th>
								
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Created At
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Read
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{contacts?.map((contact) => (
								<tr key={contact?._id} className="border-b">
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{contact?.name}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{contact?.email}
									</td>

									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{format(new Date(contact?.createdAt), "dd-MM-yyyy")}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{contact?.isRead ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6 text-green-500"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6 text-red-500"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										)}
									</td>
									<td className="flex gap-2 items-center mt-2">
										<button
											onClick={() => setEditContact(contact)}
											className="bg-green-500 text-sm hover:bg-green-700 text-white font-medium py-2 px-3 rounded	"
										>
											View
										</button>
										<button
											onClick={() => handleDelete(contact)}
											className="bg-red-500 hover:bg-red-700 text-white text-sm font-medium py-2 px-2 rounded"
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
			{editContact && (
				<Modal isOpen={editContact} onClose={() => setEditContact(null)}>
					<ContactDetails contact={editContact} />
				</Modal>
			)}
		</div>
	);
};

export default Contacts;
