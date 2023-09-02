import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
	const { access } = useSelector((state) => state.auth);

	return !access ? <Outlet /> : <Navigate to="/" />;
};

export default AuthLayout;
