import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
	const { access } = useSelector((state) => state.auth);

	return access ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateLayout;
