/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Select from "../../../components/Select";

const LeftDrawer = ({
	handleSetParams,
	handleShowDrawer,
	params,
	categories,
	handleChangeCategory,
	category,
}) => {
	const handleStatusChange = (e) => {
		console.log("===>", e.target.name, e.target.value);
		handleSetParams("auctionStatus", e.target.value);
	};

	return (
		<div className="fixed left-0 top-0 h-screen overflow-auto w-full md:w-4/12 lg:w-3/12 shadow-lg bg-white z-50">
			<div className="p-4">
				<div className="flex justify-end mb-3">
					<button
						onClick={handleShowDrawer}
						className="bg-rose-100 text-rose-600 rounded-full p-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<h4 className="text-xl mb-2">Filter Products</h4>
				<hr/>
				<div className="mt-4">
					<div className="">
						<div className="">
							<h4 className="text-lg">Select Status</h4>
							<Select
								options={[
									{ label: "All", value: "" },
									{ label: "Live", value: "live" },
									{ label: "Upcomming", value: "upcomming" },
								]}
								onChange={handleStatusChange}
								value={params?.auctionStatus}
								name="status"
							/>
						</div>
						<div className="">
							{categories?.length > 0 && (
								<>
									<h4 className="text-lg mb-1">Select Category</h4>
									<div className="flex flex-col gap-2">
										{categories.map((cat) => {
											const catClass = `bg-blue-100  text-blue-600  hover:bg-blue-500 hover:text-white `;
											const activeCatClass = `bg-blue-500 text-white`;
											return (
												<div
													key={cat?._id}
													onClick={() =>
														handleSetParams("categoryId", cat?._id)
													}
													className={`rounded px-2 py-1 cursor-pointer transition ${
														params?.categoryId === cat?._id
															? activeCatClass
															: catClass
													}`}
												>
													{cat?.name}
												</div>
											);
										})}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftDrawer;
