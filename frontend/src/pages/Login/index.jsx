import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/apis/authApi";
import ErrorDisplay from "../../components/ErrorDisplay";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import LoginImage from "../../assets/svgs/login.svg";

const initialState = {
	email: "",
	password: "",
};

const Login = () => {
	const navigate = useNavigate();
	// const { user } = useSelector((state) => state.auth);

	const [loginData, setLoginData] = useState(initialState);
	const [showPass, setShowPass] = useState(false)

	const [login, { isLoading, isError, error }] = useLoginMutation();

	const handleChange = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const result = await login(loginData).unwrap();
			const decodedUserData = jwt_decode(result?.token);
			setLoginData(initialState);
			if (decodedUserData?.isSuperAdmin) {
				navigate("/dashboard");
			} else {
				navigate("/");
			}
			toast.success("Successfully logged in");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<section className="display flex items-center">
			<div className="hidden lg:block">
				<img src={LoginImage} alt="login" />
			</div>

			<div className="w-full lg:w-5/12 shadow mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-[2px]">
				<div className="p-6 bg-white rounded-lg">
					<h2 className="text-3xl text-center mb-2">Sign in</h2>
					<p className="text-center">
						Please enter your email and password to login
					</p>

					{isError && <ErrorDisplay error={error} />}

					<form className="mt-8 flex flex-col gap-y-4" onSubmit={handleSubmit}>
						<Input
							label="Email Address"
							name={"email"}
							type={"email"}
							value={loginData.email}
							onChange={handleChange}
							placeholder={"Ex. john@example.com"}
							required
						/>
						<Input
							label="Password"
							name={"password"}
							type={showPass ? "text" : "password"}
							value={loginData.password}
							onChange={handleChange}
							placeholder={"******"}
							required
						/>
						<div className="flex gap-2 items-center">
						<input type="checkbox" id="showPass" onChange={()=>setShowPass(prev => !prev)} />
						<label htmlFor="showPass"> Show Password</label>
						</div>
						<Button fullWidth type="submit" disabled={isLoading}>
							Login
						</Button>
					</form>
					<p className="mt-4 text-center">
						Need an account?{" "}
						<Link to="/registration" className="text-blue-500">
							Register here.
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

export default Login;
