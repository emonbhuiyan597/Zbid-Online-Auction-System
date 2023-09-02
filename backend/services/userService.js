const User = require("../models/UserModel");
const error = require("../utils/error");

const getUsers = (isVendor) => {
	if (isVendor === "true") {
		return User.find({ vendor: { $exists: true } });
	}
	return User.find({ vendor: { $exists: false } });
};

const findUserByProperty = (key, value) => {
	if (key === "_id") {
		return User.findById(value);
	}
	return User.findOne({ [key]: value });
};

const createNewUser = ({
	name,
	email,
	password,
	phone,
	cardNumber,
	cvv,
	address,
	zipCode,
	vendor,
}) => {
	const user = new User({
		name,
		email,
		password,
		phone,
		cardNumber,
		cvv,
		address,
		zipCode,
		vendor: vendor ? { ...vendor } : undefined,
	});
	return user.save();
};

const updateUser = async (id, data) => {
	const { email, vendor } = data;
	const user = await findUserByProperty("email", email);

	if (user) throw error("Email already in use", 400);

	let updateData = { ...data };
	if (vendor) {
		updateData = { ...updateData, vendor: { ...vendor } };
	}

	return User.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
	findUserByProperty,
	createNewUser,
	getUsers,
	updateUser,
};
