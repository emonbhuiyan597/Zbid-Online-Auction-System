const Product = require("../models/ProductModel");
const error = require("../utils/error");

const getProducts = async (limit, offset, auctionStatus, categoryId) => {
	const currentDate = new Date();
	let query = Product.find({ endDate: { $gte: currentDate } });

	if (auctionStatus === "live") {
		query = query.where({
			startDate: { $lte: currentDate },
			endDate: { $gte: currentDate },
		});
	} else if (auctionStatus === "upcomming") {
		query = query.where({
			startDate: { $gt: currentDate },
		});
	} else if (auctionStatus === "all") {
		query = Product.find();
	}

	if (categoryId) {
		query = query.where({ category: categoryId });
	}

	query = query
		.populate("category")
		.populate("owner", "-password")
		.skip(offset)
		.limit(limit)
		.sort({ createdAt: -1 });

	return await query.exec(); // Execute the query and return the result
};

const findProductByProperty = (key, value) => {
	if (key === "_id") {
		return Product.findById(value)
			.populate("category")
			.populate("owner", "-password");
	}
	return Product.findOne({ [key]: value });
};

const createProduct = ({
	name,
	description,
	minBidPrice,
	startDate,
	endDate,
	category,
	owner,
	image,
}) => {
	console.log("image =>", image);
	const product = new Product({
		name,
		description,
		minBidPrice,
		startDate,
		endDate,
		category,
		owner,
		image,
	});
	return product.save();
};

const updateProduct = async (id, data) => {
	console.log("data =>", data);
	const product = await findProductByProperty("_id", id);
	if (!product) throw error("Product not found", 404);
	return Product.findByIdAndUpdate(id, { ...data }, { new: true });
};

const deleteProduct = async (id) => {
	const product = await findProductByProperty("_id", id);
	if (!product) throw error("Product not found", 404);
	return product.remove();
};

module.exports = {
	getProducts,
	findProductByProperty,
	createProduct,
	updateProduct,
	deleteProduct,
};
