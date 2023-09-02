/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Input from "../../../components/Input";
import { useEditBidMutation } from "../../../redux/apis/bidApi";
import { toast } from "react-toastify";
import ErrorDisplay from "../../../components/ErrorDisplay";
import Button from "../../../components/Button";

export default function BidEditForm({ bid, onClose }) {
	const [newBid, setNewBid] = useState(bid?.bidPrice);

	const [editBid, { isLoading, isSuccess, error }] = useEditBidMutation();

	const handleSubmit = () => {
		editBid({ id: bid._id, data: { bidPrice: newBid } });
	};

	useEffect(() => {
		if (isSuccess) {
			onClose();
			toast.success("Bid updated");
			location.reload();
		}
	}, [isSuccess]);

	return (
		<div>
			<h4 className="mb-6 text-2xl">Edit Bid</h4>
			{error && <ErrorDisplay error={error} />}

			<div className="flex flex-col gap-y-4">
				<Input
					label="Product"
					name={"name"}
					type={"text"}
					value={bid?.product?.name}
					placeholder={""}
					disabled={true}
				/>
				<Input
					label="Bid Amount"
					name={"bidAmount"}
					type={"number"}
					value={newBid}
					placeholder={""}
					onChange={(e) => setNewBid(e.target.value)}
				/>
				<Button onClick={handleSubmit}>Submit</Button>
			</div>
		</div>
	);
}
