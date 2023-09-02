import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../redux/apis/authApi";
import ErrorDisplay from "../../components/ErrorDisplay";
import { toast } from "react-toastify";
import TextArea from "../../components/TextArea";
import SignupImage from "../../assets/svgs/signup.svg";

const initialState = {
	name: "",
	email: "",
	phone: "",
	cardNumber: "",
	cvv: "",
	address: "",
	zipCode: "",
	password: "",
};

const vendorState = {
	vendorName: "",
	address: "",
	shopUrl: "",
};

const Registration = () => {
	const navigate = useNavigate();
	const [registerData, setRegisterData] = useState(initialState);
	const [vendorData, setVendorData] = useState(vendorState);
	const [isVendor, setIsVendor] = useState(false);

	const [registration, { isLoading, isSuccess, isError, error }] =
		useRegistrationMutation();

	const handleChange = (e) => {
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });
	};

	const handleVendorChange = (e) => {
		setVendorData({ ...vendorData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let data = { ...registerData };
		if (isVendor) {
			data = { ...data, vendor: vendorData };
		}
		registration(data);
	};

	useEffect(() => {
		if (isSuccess) {
			setRegisterData(initialState);
			navigate("/login");
			toast.success("Registration successful");
		}
	}, [isSuccess, navigate]);

	return (
		<section className="display flex items-center">
			<div className="hidden lg:block">
				<img src={SignupImage} alt="login" />
			</div>
			<div className="w-full lg:w-5/12 shadow mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-[2px]">
				<div className="p-6 bg-white rounded-lg">
					<h2 className="text-3xl text-center mb-2">Create new account</h2>
					<p className="text-center">
						Please provide required information to create new account
					</p>

					{isError && <ErrorDisplay error={error} />}

					<form className="mt-8 flex flex-col gap-y-4" onSubmit={handleSubmit}>
						<Input
							label="Full Name"
							name={"name"}
							type={"text"}
							value={registerData.name}
							onChange={handleChange}
							placeholder={"Ex. John Doe"}
							required
						/>
						<Input
							label="Email Address"
							name={"email"}
							type={"email"}
							value={registerData.email}
							onChange={handleChange}
							placeholder={"Ex. john@example.com"}
							required
						/>
						<Input
							label="Phone Number"
							name={"phone"}
							type={"number"}
							value={registerData.phone}
							onChange={handleChange}
							placeholder={"Ex. 8801711111111"}
							required
						/>
						<div className="flex items-center">
							<div className="w-full md:w-8/12 md:mr-2">
								<Input
									label="Card Number"
									name={"cardNumber"}
									type={"number"}
									value={registerData.cardNumber}
									onChange={handleChange}
									placeholder={"Ex. 1542457451245785"}
									required
								/>
							</div>
							<div className="w-full md:w-4/12">
								<Input
									label="CVV Number"
									name={"cvv"}
									type={"number"}
									value={registerData.cvv}
									onChange={handleChange}
									placeholder={"Ex. 455"}
									required
								/>
							</div>
						</div>
						<Input
							label="Zip Code"
							name={"zipCode"}
							type={"text"}
							value={registerData.zipCode}
							onChange={handleChange}
							placeholder={"Ex. 8975"}
							required
						/>
						<TextArea
							label="Address"
							name={"address"}
							value={registerData.address}
							onChange={handleChange}
							placeholder={
								"Ex. A.K. Arcade (2nd Floor), 771, Sheikh Mujib Road, Choumuhuni Circle"
							}
							required
							rows={2}
						/>

						{isVendor && (
							<>
								<Input
									label="Shop Name"
									name={"vendorName"}
									type={"text"}
									value={vendorData.vendorName}
									onChange={handleVendorChange}
									placeholder={"Ex. My Shop"}
									required={isVendor}
								/>
								<Input
									label="Shop URL"
									name={"shopUrl"}
									type={"url"}
									value={vendorData.shopUrl}
									onChange={handleVendorChange}
									placeholder={"Ex. www.shop.com"}
									required={isVendor}
								/>
								<TextArea
									label="Vendor Address"
									name={"address"}
									value={vendorData.address}
									onChange={handleVendorChange}
									placeholder={
										"Ex. A.K. Arcade (2nd Floor), 771, Sheikh Mujib Road, Choumuhuni Circle"
									}
									required={isVendor}
									rows={2}
								/>
							</>
						)}
						<Input
							label="Password"
							name={"password"}
							type={"password"}
							value={registerData.password}
							onChange={handleChange}
							placeholder={"******"}
							required
						/>
						<label className="cursor-pointer">
							<input
								type="checkbox"
								value={isVendor}
								onChange={(e) => setIsVendor(e.target.checked)}
							/>{" "}
							Register as vendor
						</label>
						<Button fullWidth type="submit" disabled={isLoading}>
							Register
						</Button>
					</form>
					<p className="mt-4 text-center">
						Already have an account?{" "}
						<Link to="/login" className="text-blue-500">
							Login here.
						</Link>
					</p>

					<p className="mt-4 text-center">
					<Link to="/#" className=" text-red-500 text-decoration-line: underline " >
							Forgot Password?
						</Link>
						</p>
				</div>
			</div>
		</section>
	);
};

export default Registration;
