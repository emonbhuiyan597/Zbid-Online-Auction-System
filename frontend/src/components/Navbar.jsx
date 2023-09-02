import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLoggedOut } from "../redux/slices/authSlice";
import useClickOutsideClose from "../hooks/useClickOutsideClose";
import Logo from "../assets/images/logo.png";




const navList = [
	{ label: "Home", path: "/" },
	{ label: "Products", path: "/products" },
	{ label: "About", path: "/about" },
	{ label: "Contact", path: "/contact" },
	
];

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { access, user } = useSelector((state) => state.auth);

	const [showDropDown, setShowDropDown] = useState(false);

	const handleClose = () => {
		setShowDropDown(false);
	};

	const menuRef = useClickOutsideClose(handleClose);

	const handleLogout = () => {
		navigate("/");
		dispatch(userLoggedOut());
		location.reload("/");
	};

	return (
		<header className="text-gray-600 body-font shadow">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link to="/" className="flex items-end gap-2">
					<img src={Logo} alt="Zbid" className="w-24" />
				</Link>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					{user?.isSuperAdmin && (
						<Link to={"/dashboard"} className="mr-5">
							<button className="px-4 py-2 rounded bg-indigo-100 text-indigo-500 font-semibold">
								Dashboard
							</button>
						</Link>
					)}
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
				{access ? (
					<div className="relative group" ref={menuRef}>
						<Button onClick={() => setShowDropDown((prev) => !prev)}>
							{user.name.split(" ")[0]}
						</Button>
						{showDropDown && (
							
							
							<div className="absolute w-40 flex flex-col mt-1 bg-gray-200 right-0 rounded z-20">
								
								
								<Link
									
									className="hover:bg-gray-300 rounded p-2 "
									to="/profile"
									onClick={handleClose}
								>
									Profile
									
								</Link>

								{user?.vendor && (
									<Link
										className="hover:bg-gray-300 rounded p-2"
										to="/products/add"
										onClick={handleClose}
									>
										Add Product
									</Link>
								)}
								<Link
									className="hover:bg-gray-300 rounded p-2"
									onClick={() => {
										handleLogout();
										handleClose();
									}}
								>
									Logout
								</Link>
							</div>
						)}
					</div>
				) : (
					<Button onClick={() => navigate("/login")}>
						Login
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
				)}
			</div>
			
			
		</header>
	);
};

export default Navbar;
