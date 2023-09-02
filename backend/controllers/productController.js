const Product = require("../models/ProductModel");
const productService = require("../services/productService");
const { PAGE_LIMIT, COMMISION_PERCENTAGE } = require("../configs");
const Bid = require("../models/BidModel");
const Wallet = require("../models/walleteModel");
const User = require("../models/UserModel");

const getProducts = async (req, res, next) => {
	const limit = parseInt(req.query.limit) || PAGE_LIMIT;
	const offset = parseInt(req.query.offset) || 0;
	const auctionStatus = req.query.auctionStatus || null;
	const categoryId = req.query.categoryId || null;

	try {
		const data = await productService.getProducts(
			limit,
			offset,
			auctionStatus,
			categoryId
		);
		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const getProduct = async (req, res, next) => {
	const { id } = req.params;
	try {
		const data = await productService.findProductByProperty("_id", id);
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const createProduct = async (req, res, next) => {
	const { name, description, minBidPrice, startDate, endDate, category } =
		req.body;

	try {
		const owner = req.user._id;

		const data = await productService.createProduct({
			name,
			description,
			minBidPrice,
			startDate,
			endDate,
			category,
			owner,
			image: `/uploads/${req.file.filename}`,
			image: `/uploads/${req.file.filename}`,
		});
		return res.status(201).json(data);
	} catch (e) {
		next(e);
	}
};

const updateProduct = async (req, res, next) => {
	const { id } = req.params;
	const { name, description, minBidPrice, startDate, endDate, category } =
		req.body;
	const file = req.file;

	try {
		const editData = {
			name,
			description,
			minBidPrice,
			startDate,
			endDate,
			category,
		};
		if (file) {
			editData.image = `/uploads/${req.file.filename}`;
		}
		// check is requested user is the owner
		const product = await Product.findOne({ _id: id }).populate(
			"owner",
			"-password"
		);
		if (!product || product.owner.email !== req.user.email)
			throw error("Unauthorized", 403);

		// update
		const data = await productService.updateProduct(id, editData);
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const deleteProduct = async (req, res, next) => {
	const { id } = req.params;

	try {
		const product = await Product.findOne({ _id: id }).populate(
			"owner",
			"-password"
		);
		if (!product || product.owner.email !== req.user.email)
			throw error("Unauthorized", 403);

		await Product.findByIdAndRemove(id);
		return res.status(200).json({ message: "Product deleted successfully" });
	} catch (e) {
		next(e);
	}
};

const getVendorProductsBy = async (req, res, next) => {
	const limit = parseInt(req.query.limit) || PAGE_LIMIT;
	const offset = parseInt(req.query.offset) || 0;

	const owner = req.user._id;

	try {
		const data = await Product.find({ owner })
			.populate("category")
			.skip(offset)
			.limit(limit)
			.sort({ createdAt: -1 });

		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const makePayment = async (req, res, next) => {
	const { productId } = req.params;

	try {
		const product = await Product.findByIdAndUpdate(productId, {
			isPaid: true,
			paidBy: req.user._id,
		});

		const bid = await Bid.findHighestBidByUser(productId, req.user._id);

		const vendorUserId = product.owner;
		const comission = (COMMISION_PERCENTAGE / 100) * bid.bidPrice;

		const newMone = await User.updateOne(
			{ _id: vendorUserId },
			{ $inc: { "vendor.money": bid.bidPrice - comission } }
		);

		await Wallet.findOneAndUpdate(
			{},
			{ $inc: { amount: comission } },
			{ new: true, upsert: true }
		);

		return res.status(200).json(product);
	} catch (err) {
		next(err);
	}
};

const relatedProducts = async (req, res, next) => {
	const { productId } = req.params;
	const currentDate = new Date();

	try {
		const product = await Product.findById(productId);
		if (!product) {
			return res.status(404).json({ error: "Product not found." });
		}

		const relatedProducts = await Product.find({
			_id: { $ne: product._id },
			category: product.category._id,
			endDate: { $gte: currentDate },
		})
			.limit(4)
			.populate("category");

		res.json(relatedProducts);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
	getVendorProductsBy,
	makePayment,
	relatedProducts,
};
