import ErrorDisplay from "../../components/ErrorDisplay";
import { format } from "date-fns";
import Loader from "../../components/Loader";
import { useGetSummaryQuery } from "../../redux/apis/statisticsApi";
import { useGetUsersQuery } from "../../redux/apis/userApi";

const Dashboard = () => {
	const {
		data: users,
		isLoading,
		isError,
		error,
	} = useGetUsersQuery({ vendor: false });
	const {
		data: vendors,
		isVendorLoading,
		isVendorError,
		vendorerror,
	} = useGetUsersQuery({ vendor: true });
	const {
		data: stats,
		isStatLoading,
		isStatError,
		statError,
	} = useGetSummaryQuery();

	return (
		<div>
			{isStatLoading ? (
				<Loader />
			) : isStatError ? (
				<ErrorDisplay error={statError} />
			) : (
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
					<div className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<h1 className="text-4xl text-center">{stats?.products}</h1>
						<h4 className="text-xl text-center">Running Auctions</h4>
					</div>
					<div className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<h1 className="text-4xl text-center">{stats?.categories}</h1>
						<h4 className="text-xl text-center">Active Categories</h4>
					</div>
					<div className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<h1 className="text-4xl text-center">{stats?.users}</h1>
						<h4 className="text-xl text-center">Active Users</h4>
					</div>
					<div className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<h1 className="text-4xl text-center">{stats?.vendors}</h1>
						<h4 className="text-xl text-center">Active Vendors</h4>
					</div>
					<div className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<h1 className="text-4xl text-center">{stats?.contacts}</h1>
						<h4 className="text-xl text-center">Unread Contacts</h4>
					</div>
					<div className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<h1 className="text-4xl text-center">
							{users?.wallet?.amount.toFixed(2)}
						</h1>
						<h4 className="text-xl text-center">Available Credit</h4>
					</div>
				</div>
			)}

			{isLoading || isVendorLoading ? (
				<Loader />
			) : isError || isVendorError ? (
				<ErrorDisplay error={error || vendorerror} />
			) : (
				<div className="  grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
					<div className="shadow p-4 rounded max-h-96 overflow-y-auto">
						<h4 className="text-xl font-semibold pb-2 border-b border-gray-200 mb-2">
							Recent Users
						</h4>
						<ul>
							{users?.data?.map((user) => (
								<li
									key={user?._id}
									className="flex justify-between flex-wrap items-center border-b border-gray-200 pb-2 mb-2"
								>
									<div className="">
										<div className="">{user?.name}</div>
										<div className="text-sm text-gray-600">{user?.email}</div>
									</div>
									<div className="">
										~ {format(new Date(user?.createdAt), "dd/MM/yyyy")}
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="shadow p-4 rounded max-h-96 overflow-y-auto">
						<h4 className="text-xl font-semibold pb-2 border-b border-gray-200 mb-2">
							Recent Vendors
						</h4>
						<ul>
							{vendors?.data?.map((user) => (
								<li
									key={user?._id}
									className="flex justify-between flex-wrap items-center border-b border-gray-200 pb-2 mb-2"
								>
									<div className="">
										<div className="">{user?.vendor?.vendorName}</div>
										<div className="text-sm text-gray-600">{user?.email}</div>
										<div className="text-sm text-gray-600">
											{user?.vendor?.address}
										</div>
									</div>
									<div className="">
										~ {format(new Date(user?.createdAt), "dd/MM/yyyy")}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
