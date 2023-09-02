import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Navbar />
			<div id="" className="">
				<div className="container mx-auto px-5 py-8">
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default RootLayout;
