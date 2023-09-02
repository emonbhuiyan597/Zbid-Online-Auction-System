/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Tag from "../../components/Tag";

import { useAddBidMutation, useGetBidsQuery } from "../../redux/apis/bidApi";
import Loader from "../../components/Loader";
import ErrorDisplay from "../../components/ErrorDisplay";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
	useGetProductQuery,
	useGetRelatedProductsQuery,
	useProductPaymentMutation,
} from "../../redux/apis/productApi";
import UseUser from "../../hooks/useUser";
import DefaultProduct from "../../assets/images/defaultProduct.jpg";
import { format } from "date-fns";
import SectionTitle from "../../components/SectionTitle";
import ProductCard from "../../components/ProductCard";
import NoDataFound from "../../components/NoDataFound";



const ProductDetail = () => {
	const { productId } = useParams();
	const [isVendor] = UseUser();
	const { user } = useSelector((state) => state.auth);

	const {
		data: product,
		isLoading: productLoading,
		isError: productIsError,
		error: productError,
	} = useGetProductQuery({ productId }, { skip: !productId });

	const {
		data: relatedProducts,
		isLoading: relatedisLoading,
		isError: relatedisError,
		error: relatederror,
	} = useGetRelatedProductsQuery(product?._id, { skip: !product });

	const {
		data: bids,
		isLoading,
		isError,
		error,
	} = useGetBidsQuery({ productId: product?._id }, { skip: !product?._id });

	const [
		productPayment,
		{
			isLoading: isPaymentLoading,
			isError: isPaymentError,
			error: paymentError,
		},
	] = useProductPaymentMutation();

	const [
		addBid,
		{ isLoading: addLoading, isError: addIsError, error: addError, isSuccess },
	] = useAddBidMutation();

	const [bid, setBid] = useState(product?.minBidPrice);

	const handleBidSubmit = (e) => {
		e.preventDefault();
		if (bid >= product.minBidPrice) {
			addBid({ data: { bidPrice: bid }, productId: product._id });
		} else {
			return false;
		}
	};

	 const handlePayment = (id) => {
		 const confirm = window.confirm(
			 "Are you sure, you want to make this payment?"
		 );
		 if (confirm) {
			 productPayment({ id });
		 }
		 return false;
	 };


	useEffect(() => {
		if (isSuccess) {
			toast.success("Your bid was placed successfully");
		}
	}, [isSuccess]);

   


	const isOwner = product?.owner?.email === user?.email;
	const auctionClosed = new Date(product?.endDate) < new Date();
	const showBidForm =
		user &&
		product?.owner?.email !== user?.email &&
		!auctionClosed &&
		!user?.isSuperAdmin &&
		new Date(product?.startDate) <= new Date();

	return productLoading ? (
		<Loader />
	) : productIsError || isPaymentError ? (
		<ErrorDisplay error={productError || paymentError} />
	) : (
		<section className="">
			<div className="flex justify-end">
				{auctionClosed && (
					<div className="bg-orange-100 text-orange-600 px-3 py-2 font-semibold">
						Auction Closed
					</div>
				)}
			</div>
			<div className="flex flex-wrap">
				<div className="w-full md:w-6/12 lg:w-4/12 mt-8 ">
					<img
						alt={product?.name}
						className="w-full object-cover object-center  rounded shadow p-1 "
						src={
							product?.image
								? `${import.meta.env.VITE_BASE_API_BASE_URL}${product?.image}`
								: DefaultProduct
						}
					/>
					
				</div>
				
				<div className="w-full md:w-6/12 lg:w-8/12 mt-5 ps-14">
					<Tag label={product?.category?.name} />
					<h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-3">
						{product?.name}
					</h1>
					<p className="leading-relaxed border-b  pb-6 border-slate-500 text-justify">
						<pre className="whitespace-pre-wrap font-sans mt-6 ">{product?.description}</pre>
					</p>
					<p className="mt-6">
						<strong>Start Date</strong>:{" "}
						{format(new Date(product?.startDate), "dd-MM-yyyy")}
					</p>
					<p className="mt-1">
						<strong>End Date</strong>:{" "}
						{format(new Date(product?.endDate), "dd-MM-yyyy")}
					</p>
					<p className="mt-1">
						<strong>Minimum Bid Price</strong>: ৳{product?.minBidPrice}
					</p>
					{!user && (
						<Link
							to="/login"
							className="border border-orange-400  hover:bg-orange-100 text-orange-500 py-1 px-2 rounded inline-block my-4"
						>
							Please login to place your bid
						</Link>
					)}
					{!isVendor && showBidForm && (
						<>
							<div className="mt-8">
								<h4 className="text-2xl">Bid Now</h4>
								<form className="flex gap-x-4 mt-2" onSubmit={handleBidSubmit}>
									<Input
										name={"bid"}
										type="number"
										value={bid}
										min={product?.minBidPrice}
										onChange={(e) => setBid(e.target.value)}
									/>
									<Button type={"submit"} disabled={addLoading}>
										Submit
									</Button>
								</form>
								{addIsError && <ErrorDisplay error={addError} />}
							</div>
							<hr className="mt-12 mb-8" />
						</>
					)}

					<div>
						{isLoading ? (
							<Loader />
						) : isError ? (
							<ErrorDisplay error={error} />
						) : (
							bids?.length > 0 && (
								<div className="mt-4">
									<h4 className="text-2xl">Recent Bids</h4>
									<table className="min-w-full mt-4">
										<thead className="bg-white border-b">
											<tr className="bg-gray-100">
												<th
													scope="col"
													className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
												>
													No
												</th>
												<th
													scope="col"
													className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
												>
													Bid Amount
												</th>
												<th
													scope="col"
													className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
												>
													Date/Time
												</th>
												{isOwner && (
													<th
														scope="col"
														className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
													>
														User
													</th>
												)}
												<th
													scope="col"
													className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
												></th>
											</tr>
										</thead>
										<tbody>
											{bids.map((bid, i) => (
												<tr key={bid._id} className="border-b">
													<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
														{i + 1}
													</td>
													<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
														{bid?.bidPrice}
													</td>
													<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
														{new Date(bid?.updatedAt).toLocaleString()}
													</td>
													{isOwner && (
														<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
															<div className="">
																{bid?.user?.name}
																<div className="text-sm text-gray-500">
																	{bid?.user?.email}
																</div>
															</div>
														</td>
													)}
													{user?.email === bid?.user?.email &&
														bid?.isHighestBid &&
														new Date(product?.endDate) < new Date() && (
															<td className="text-sm text-gray-900 px-2 py-4 whitespace-nowrap">
																{!product?.isPaid ? (
																	<button
																		onClick={() => handlePayment(product?._id)}
																		className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full"
																		disabled={isPaymentLoading}
																	>
																		Pay Now
																	</button>
																) : (
																	<div className="">
																		<span className="bg-green-500 text-white font-bold py-2  px-4 rounded-full">
																			Payment Done
																		</span>
																		<div className="mt-1 text-red-500 rounded px-1 py-2 font-semibold">
																			Please contact/visit vendor to collect
																			your product.
																		</div>
																	</div>
																)}
															</td>
														)}
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)
						)}
					</div>

					<div className="mt-8">
						<h4 className="text-2xl font-semibold">Vendor Details:</h4>

						<div className="border-t border-slate-500 pt-2 mt-2">
							<div className="">
								<span className="font-bold text-black-500 ">
									Vendor Name:
								</span>
								<span className="ml-2 font-semibold text-black-500 ">
									{product?.owner?.vendor?.vendorName}
								</span>
							</div>


							<div className="">
								<span className="font-bold text-black-500 ">
									 Email:
								</span>
								
								<span className="ml-2 font-semibold  ">
								
								<a href={`mailto:${product?.owner?.email}`} className="text-blue-600 cursor-pointer hover:underline ">
								{product?.owner?.email}					
																	
								</a>
								
								</span>
							</div>									


								<div className="">
								<span className="font-bold text-black-500">
									Phone Number:
								</span>
								<span className="ml-2 font-semibold ">
								
								<a href="tel:" className="text-blue-600 cursor-pointer hover:underline ">
								
								{product?.owner?.phone}						
								</a>
									
								</span>
							</div>									

							

							<div className="">
								<span className="font-bold text-black-500">Vendor Address:</span>
								<span className="ml-2 font-semibold text-black-500 ">
									{product?.owner?.vendor?.address}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12">
				<SectionTitle title={"Related Auctions"} />

				<div className="flex flex-wrap mt-12">
					{relatedisLoading ? (
						<Loader />
					) : relatedisError ? (
						<ErrorDisplay error={relatederror} />
					) : relatedProducts?.length > 0 ? (
						relatedProducts?.map((product) => (
							<ProductCard key={product?._id} product={product} />
						))
					) : (
						<div className="w-full">
							<NoDataFound />
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ProductDetail;
