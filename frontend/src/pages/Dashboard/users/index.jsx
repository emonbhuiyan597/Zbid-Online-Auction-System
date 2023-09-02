import { format } from "date-fns";
import { useGetUsersQuery } from "../../../redux/apis/userApi";
import Loader from "../../../components/Loader";
import ErrorDisplay from "../../../components/ErrorDisplay";

const User = () => {
	const {
		data: users,
		isLoading,
		isError,
		error,
	} = useGetUsersQuery({ vendor: false });

	return (
		<div>
			<h4 className="bg-gradient-to-r from-blue-500 text-xl to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white mb-6 transition">
				All Users
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
									Full Name
								</th>
								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Email Address
								</th>

								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Phone Number
								</th>

								<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									Created At
								</th>
							</tr>
						</thead>
						<tbody>
							{users?.data?.map((user) => (
								<tr key={user?._id} className="border-b">
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{user?.name}
									</td>
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{user?.email}
									</td>
									
									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{user?.phone}
									</td>
									

									<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
										{format(new Date(user?.createdAt), "dd-MM-yyyy")}
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

export default User;
