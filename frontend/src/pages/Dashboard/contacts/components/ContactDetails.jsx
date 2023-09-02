/* eslint-disable react/prop-types */

import { format } from "date-fns";
import { useEditContactMutation } from "../../../../redux/apis/contactApi";
import ErrorDisplay from "../../../../components/ErrorDisplay";
import { useEffect } from "react";

const ContactDetails = ({ contact }) => {
	const [editContact, { isError, error }] = useEditContactMutation();

	useEffect(() => {
		if (contact) {
			editContact({ data: { isRead: true }, id: contact?._id });
		}
	}, [contact]);

	return (
		<div className="">
			<h4 className="text-lg pb-2 border-b border-gray-200 mb-2">
				{contact?.name}
			</h4>
			{isError && <ErrorDisplay error={error} />}
			<div className="mb-8">
				<p className="text-gray-500">
					Date: {format(new Date(contact?.createdAt), "dd-MM-yyyy")}
				</p>
				<p className="text-gray-500">Email: {contact?.email}</p>
			</div>
			<pre>{contact?.message}</pre>
		</div>
	);
};

export default ContactDetails;
