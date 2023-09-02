import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Button from "./Button";
import { userLoggedOut } from "../redux/slices/authSlice";

const navList = [
	{ label: "Dashboard", path: "/dashboard" },
	{ label: "Auctions", path: "/dashboard/auctions" },
	{ label: "Vendors", path: "/dashboard/vendors" },
	{ label: "Users", path: "/dashboard/users" },
	{ label: "Categories", path: "/dashboard/categories" },
	{ label: "Contacts", path: "/dashboard/contacts" },
];

const DashboardLayout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	const handleLogout = () => {
		navigate("/");
		dispatch(userLoggedOut());
		location.reload("/");
	};

	useEffect(() => {
		if (!user.isSuperAdmin) {
			navigate("/");
		}
	}, [user, navigate]);

	return (
		<div>
			<header className="text-gray-600 body-font shadow">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link to="/dashboard" className="flex items-end gap-2">
						<img src={Logo} alt="Zbid" className="w-24" />
					</Link>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<Link to={"/"} className="mr-5">
							<button className="px-4 py-2 rounded bg-indigo-100 text-indigo-500 font-semibold">
								View Site
							</button>
						</Link>
						{navList.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className="mr-5 hover:text-gray-900"
							>
								{item.label}
							</Link>
						))}
					</nav>

					<Button onClick={handleLogout}>
						Logout
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-4 h-4 ml-1"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</Button>
				</div>
			</header>
			<div className="container mx-auto px-5 py-8">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
