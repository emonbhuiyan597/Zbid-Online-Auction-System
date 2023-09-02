import { useSelector } from "react-redux";

const UseUser = () => {
	const { user } = useSelector((state) => state.auth);
	const isVendor = !!user?.vendor;

	return [isVendor];
};

export default UseUser;
