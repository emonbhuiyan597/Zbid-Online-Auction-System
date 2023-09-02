import { format } from "date-fns";
import ErrorDisplay from "../../../components/ErrorDisplay";
import Loader from "../../../components/Loader";
import { useGetProductsQuery } from "../../../redux/apis/productApi";
import { Link } from "react-router-dom";


const Auction = () => {
	const {
		data: products,
		isLoading,
		isError,
		error,
	} = useGetProductsQuery({ auctionStatus: "all" });

	return (
		<div>
			<h4 className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white mb-6 transition">
				All Auctions
			</h4>
			<div className="shadow p-4 rounded w-full overflow-auto">
				{isLoading ? (
					<Loader />
				) : isError ? (
					<ErrorDisplay error={error} />
				) : (
					<table className="min-w-full border">
						<thead className="bg-white border-b">
							<tr className="bg-gray-100">
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Name
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Min Bid
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Start Date
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									End Date
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Category
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Paid
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Created At
								</th>
							</tr>
						</thead>
						<tbody>
							{products?.map((product) => (
								<tr key={product?._id} className="border-b">
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										<Link
											to={`/products/${product?._id}`}
											className="hover:underline cursor-pointer"
										>
											{product?.name}
										</Link>
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{product?.minBidPrice}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{format(new Date(product?.startDate), "dd-MM-yyyy")}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{format(new Date(product?.endDate), "dd-MM-yyyy")}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{product?.category?.name}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{product?.isPaid ? "Paid" : "Not Paid"}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{format(new Date(product?.createdAt), "dd-MM-yyyy")}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default Auction;
