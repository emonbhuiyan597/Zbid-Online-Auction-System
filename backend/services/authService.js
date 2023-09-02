const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUserByProperty, createNewUser } = require("./userService");
const error = require("../utils/error");
const { JWT_SECRET_KEY } = require("../utils");
const { JWT_EXPIRE_TIME } = require("../configs");

const registerService = async ({
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
}) => {
	let user = await findUserByProperty("email", email);
	if (user) throw error("User already exist", 400);

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);
	const data = {
		name,
		email,
		phone,
		cardNumber,
		cvv,
		address,
		zipCode,
		password: hash,
		vendor: vendor ? vendor : false,
	};
	if (shopUrl) data.shopUrl = shopUrl;

	return createNewUser(data);
};

const loginService = async ({ email, password }) => {
	const user = await findUserByProperty("email", email);
	if (!user) throw error("Invalid Credential", 400);

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) throw error("Invalid Credential", 400);

	const payload = {
		_id: user._id,
		name: user.name,
		email: user.email,
		isSuperAdmin: user.isSuperAdmin,
		phone: user.phone,
		cardNumber: user.cardNumber,
		cvv: user.cvv,
		address: user.address,
		zipCode: user.zipCode,
		vendor: user.vendor ? user.vendor : false,
	};
	return jwt.sign(payload, JWT_SECRET_KEY, JWT_EXPIRE_TIME);
};

module.exports = { registerService, loginService };
