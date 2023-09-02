/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import {
	useDeleteProductMutation,
	useGetVendorProductsQuery,
} from "../../redux/apis/productApi";
import Loader from "../../components/Loader";
import ErrorDisplay from "../../components/ErrorDisplay";
import {
	useDeletebidMutation,
	useGetUserBidsQuery,
} from "../../redux/apis/bidApi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal";
import BidEditForm from "./components/BidEditForm";
import { format } from "date-fns";
import Button from "../../components/Button";

const Profile = () => {
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const [editBid, setEditBid] = useState();
	const [editProduct, setEditProduct] = useState();

	const handleEdit = (product) => {
		navigate("/products/add", { state: { product } });
	};

	const {
		data,
		isLoading: productsLoading,
		isError: productsIsError,
		error: productsError,
	} = useGetVendorProductsQuery(
		{
			limit: 25,
			offset: 0,
		},
		{ refetchOnMountOrArgChange: true }
	);
	const {
		data: bids,
		isLoading: bidIsLoading,
		isError: bidIsError,
		error: bidError,
	} = useGetUserBidsQuery(
		{
			userId: user._id,
			limit: 20,
			offset: 0,
		},
		{ refetchOnMountOrArgChange: true, skip: !user }
	);

	const [
		deletebid,
		{
			isLoading: deleteLoading,
			isError: deleteIsError,
			error: deleteError,
			isSuccess: deleteSuccess,
		},
	] = useDeletebidMutation();

	const [
		deleteProduct,
		{
			isLoading: deleteProductLoading,
			isError: deleteProductIsError,
			error: deleteProductError,
			isSuccess: deleteProductSuccess,
		},
	] = useDeleteProductMutation();

	const handleDelete = (bid) => {
		const confirm = window.confirm("Are you sure to delete this bid?");
		if (confirm) deletebid({ id: bid._id });
	};
	const handleProductDelete = (product) => {
		const confirm = window.confirm("Are you sure to delete this product?");
		if (confirm) deleteProduct({ id: product._id });
	};

	return (
		<section className="relative mt-4">
			<div className="flex flex-col lg:flex-row">
				<div className="p-4 shadow rounded w-full lg:w-6/12 mb-12">
					<div className="">
						<div className="border-b border-slate-600 pb-1 mb-6 text-lg font-semibold">
							User Information
						</div>
						<div className="">
							<div className="">
								<div className="rounded-full w-12 h-12 p-3 bg-gray-400 inline-block text-center text-white font-semibold mb-6">
								<div className="avatar">

									</div>
								<h4 className="text-uppercase text-xl">
										{user?.name
											?.split(" ")
											.slice(0, 2)
											.map((part) => part[0])}
									</h4>
								</div>
								<div className="flex flex-col gap-y-4">
									<Input
										label="Full Name"
										name={"name"}
										type={"text"}
										value={user.name}
										placeholder={"Ex. John Doe"}
										required
										disabled={true}
									/>
									<Input
										label="Email Address"
										name={"email"}
										type={"email"}
										value={user.email}
										placeholder={"Ex. john@example.com"}
										required
										disabled={true}
									/>
									<Input
										label="Phone Number"
										name={"phone"}
										type={"tel"}
										value={user.phone}
										placeholder={"Ex. 8801711111111"}
										required
										disabled={true}
									/>
									<div className="flex items-center">
										<div className="w-full md:w-8/12 md:mr-2">
											<Input
												label="Card Number"
												name={"cardNumber"}
												type={"password"}
												value={user.cardNumber}
												placeholder={"Ex. 1542457451245785"}
												required
												disabled={true}
											/>
										</div>
										<div className="w-full md:w-4/12">
											<Input
												label="CVV Number"
												name={"cvv"}
												type={"password"}
												value={user.cvv}
												placeholder={"Ex. 455"}
												required
												disabled={true}
											/>
										</div>
									</div>
									<Input
										label="Zip Code"
										name={"zipCode"}
										type={"text"}
										value={user.zipCode}
										placeholder={"Ex. 8975"}
										required
										disabled={true}
									/>
									<TextArea
										label="Address"
										name={"address"}
										value={user.address}
										placeholder={
											"Ex. A.K. Arcade (2nd Floor), 771, Sheikh Mujib Road, Choumuhuni Circle"
										}
										required
										rows={2}
										disabled={true}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{!user?.isSuperAdmin && (
					<div className="p-4 shadow rounded w-full lg:w-6/12 mb-12">
						{!user.vendor ? (
							<div className="">
								<div className="border-b border-slate-600 pb-1 mb-6 text-lg font-semibold">
									Recent Bids
								</div>
								<div className="">
									{bidIsLoading || deleteLoading ? (
										<Loader />
									) : bidIsError || deleteError ? (
										<ErrorDisplay error={bidError || deleteError} />
									) : (
										<div className="flex flex-col gap-y-2">
											{bids.map((bid) => {
												return (
													<div
														key={bid.id}
														className="pb-2 mb-2 border-b border-slate-200 flex justify-between"
													>
														<div className="">
															<span
																className="cursor-pointer hover:underline"
																onClick={() =>
																	navigate(`/products/${bid?.product?._id}`)
																}
															>
																{bid.product.name}
															</span>
															<div className="text-sm text-slate-500">
																{format(new Date(bid?.updatedAt), "dd-MM-yyyy")}
															</div>
														</div>
														<div className="flex gap-4 items-center">
															<div className="mr-4">৳ {bid.bidPrice}</div>
															<div className="flex gap-2">
																<button
																	onClick={() => setEditBid(bid)}
																	className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-medium py-2 px-3 rounded"
																>
																	Edit
																</button>
																<button
																	onClick={() => handleDelete(bid)}
																	className="bg-red-500 text-sm hover:bg-red-700 text-white font-medium py-2 px-2 rounded"
																>
																	Delete
																</button>
															</div>
														</div>
													</div>
												);
											})}
										</div>
									)}
								</div>
							</div>
						) : (
							<div className="">
								<div className="border-b border-slate-600 pb-1 mb-6 text-lg font-semibold">
									Vendor Information
								</div>
								<div className="">
									<div className="flex flex-col gap-y-4">
										<Input
											label="Shop Name"
											name={"vendorName"}
											type={"text"}
											value={user.vendor.vendorName}
											placeholder={""}
											required
											disabled={true}
										/>
									<Input
										label="Shop Url"
										name={"shopUrl"}
										type={"url"}
										value={user.vendor.shopUrl}
										placeholder={""}
										required
										disabled={true}
									/>


										<TextArea
											label="Vendor Address"
											name={"address"}
											value={user.vendor.address}
											placeholder={""}
											required
											disabled={true}
										/>	
										<p className="font-semibold text-green-500">
											Available Credit:{" "}
											<span>
												{user?.vendor?.money
													? user?.vendor?.money.toFixed(2)
													: "00.00"}
											</span>
										</p>
									</div>
								</div>
							</div>
						)}
					</div>
				)}
			</div>

			{user?.vendor && (
				<div className="w-full lg:w-6/12">
					<div className="">
						<div className="border-b border-slate-600 pb-1 mb-6 text-lg font-semibold">
							Recent Auctions
						</div>

						<div className="flex flex-col gap-y-4">
							{productsLoading ? (
								<Loader />
							) : productsError ? (
								<ErrorDisplay error={productsError} />
							) : (
								data.map((prod) => (
									<div className="rounded p-2	  shadow" key={prod.id}>
										<div className="text-lg flex justify-between ">
											<div className="cursor-pointer hover:underline">
											<Link to={`/products/${prod._id}`}>{prod?.name}</Link>{" "}
											</div>
											
											<div className="flex gap-2 ">
												<div
													className={`${
														prod?.isPaid
															? "bg-green-500  text-white font-medium py-2 px-3 rounded"
															: "bg-red-500  text-white font-medium py-2 px-2 rounded"
													} px-2 py-1 font-semibold text-sm rounded`}
												>
													{prod?.isPaid ? "Paid" : "Not Paid"}
												</div>
												<button
													onClick={() => handleEdit(prod)}
													className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-medium py-2 px-3 rounded"
												>
													Edit
												</button>
												<button
													onClick={() => handleProductDelete(prod)}
													className="bg-red-500 hover:bg-red-700 text-sm text-white font-medium py-2 px-2 rounded"
												>
													Delete
												</button>
											</div>
										</div>
										<div className="text-sm text-slate-500">
											Start Date:{" "}
											{format(new Date(prod?.startDate), "dd-MM-yyyy")}
										</div>
										<div className="text-sm text-slate-500">
											End Date: {format(new Date(prod?.endDate), "dd-MM-yyyy")}
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</div>
			)}

			{editBid && (
				<Modal isOpen={editBid} onClose={() => setEditBid(null)}>
					<BidEditForm bid={editBid} onClose={() => setEditBid(null)} />
				</Modal>
			)}
		</section>
	);
};

export default Profile;
