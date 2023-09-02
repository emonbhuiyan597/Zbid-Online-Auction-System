const Wallet = require("../models/walleteModel");
const userService = require("../services/userService");

const getUsers = async (req, res, next) => {
	try {
		const isVendor = req.query.vendor;

		const data = await userService.getUsers(isVendor);
		const wallet = await Wallet.findOne({});

		res.status(200).json({ data, wallet });
	} catch (e) {
		next(e);
	}
};

const getUser = async (req, res, next) => {
	const { email } = req.params;

	try {
		const data = await userService.findUserByProperty("email", email);
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getUsers,
	getUser,
};
