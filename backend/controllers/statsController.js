const User = require("../models/UserModel");
const Product = require("../models/ProductModel");
const Category = require("../models/CategoryModel");
const Contact = require("../models/ContactModel");

const getSummary = async (req, res, next) => {
	try {
		const users = await User.find({
			vendor: { $exists: false },
		}).countDocuments();
		const vendors = await User.find({
			vendor: { $exists: true },
		}).countDocuments();
		const products = await Product.countDocuments();
		const categories = await Category.countDocuments();
		const contacts = await Contact.find({ isRead: false }).countDocuments();

		const data = { users, products, categories, vendors, contacts };

		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getSummary,
};
