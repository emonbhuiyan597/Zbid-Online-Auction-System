const { registerService, loginService } = require("../services/authService");

const registerController = async (req, res, next) => {
	const {
		name,
		email,
		password,
		phone,
		cardNumber,
		cvv,
		address,
		zipCode,
		vendor,
		shopUrl,
	} = req.body;

	// vallidation
	if (
		!name ||
		!email ||
		!password ||
		!phone ||
		!cardNumber ||
		!cvv ||
		!address ||
		!zipCode
	) {
		return res.status(400).json({ message: "Invalid Data" });
	}

	try {
		const user = await registerService({
			name,
			email,
			password,
			phone,
			cardNumber,
			cvv,
			address,
			zipCode,
			vendor,
			shopUrl,
		});
		delete user._doc.password;
		return res.status(201).json({ message: "User Created Successfully", user });
	} catch (e) {
		next(e);
	}
};

const loginController = async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(400).json({ message: "Email and Password are required" });

	try {
		const token = await loginService({ email, password });
		return res.status(200).json({ message: "Login Successful", token });
	} catch (e) {
		next(e);
	}
};

module.exports = {
	loginController,
	registerController,
};
