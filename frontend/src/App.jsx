import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import RootLayout from "./components/RootLayout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AuthLayout from "./components/AuthLayout";
import AddProduct from "./pages/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import PrivateLayout from "./components/PrivateLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/Dashboard/users";
import Vendors from "./pages/Dashboard/vendors";
import Categories from "./pages/Dashboard/categories";
import Auction from "./pages/Dashboard/auctions/index.jsx";
import Contacts from "./pages/Dashboard/contacts";
import "swiper/css/bundle";
import "./App.css";



export default function App() {
	return (
		<>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<RootLayout />}>
						<Route index element={<Homepage />} />
						<Route path="products" element={<Products />} />
						<Route path="products/add" element={<AddProduct />} />
						<Route path="products/:productId" element={<ProductDetail />} />
						<Route path="contact" element={<Contact />} />
						<Route path="about" element={<About />} />
						<Route element={<PrivateLayout />}>
							<Route path="profile" element={<Profile />} />
						</Route>
						<Route element={<AuthLayout />}>
							<Route path="login" element={<Login />} />
							<Route path="registration" element={<Registration />} />
						</Route>
					</Route>
					<Route path="dashboard" element={<DashboardLayout />}>
						<Route index={true} element={<Dashboard />} />
						<Route path="vendors" element={<Vendors />} />
						<Route path="users" element={<User />} />
						<Route path="categories" element={<Categories />} />
						<Route path="auctions" element={<Auction />} />
						<Route path="contacts" element={<Contacts />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
