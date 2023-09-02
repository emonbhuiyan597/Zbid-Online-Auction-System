const BidService = require("../services/bidService");
const ProductService = require("../services/productService");
const Bid = require("../models/BidModel");
const error = require("../utils/error");
const { PAGE_LIMIT } = require("../configs");
const Product = require("../models/ProductModel");

const getBidsByProduct = async (req, res, next) => {
	try {
		const { productId } = req.params;
		const limit = req.params.limit || PAGE_LIMIT;
		const offset = req.params.offset || 0;

		const bids = await Bid.find({ product: productId })
			.populate("user", "-password")
			.sort({ bidPrice: -1 });

		const highestBid = bids.length > 0 ? bids[0] : null;

		const data = bids.map((bid) => ({
			...bid.toObject(),
			isHighestBid:
				bid._id.toString() === (highestBid && highestBid._id.toString()),
		}));

		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const getBidsByUser = async (req, res, next) => {
	try {
		const { userId } = req.params;
		const limit = req.params.limit || PAGE_LIMIT;
		const offset = req.params.offset || 0;

		const data = await Bid.find({ user: userId })
			.populate("product")
			.skip(offset)
			.limit(limit)
			.sort({ createdAt: -1 });
		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const createBid = async (req, res, next) => {
	const { bidPrice } = req.body;
	const { productId } = req.params;
	try {
		const user = req.user;

		if (user?.vendor) {
			throw error("Vendor cannot bid!", 400);
		}

		const product = await ProductService.findProductByProperty(
			"_id",
			productId
		);
		if (!product) throw error("Product not found", 404);
		if (product.user === req.user._id) throw error("Unauthorized", 400);

		// Check if the current date is after the product's end date
		const currentDate = new Date();
		if (currentDate > product.endDate) {
			throw error("Bidding has ended for this product", 400);
		}

		const bidExists = await Bid.find({ product: productId, user: user._id });
		if (bidExists.length > 0)
			throw error("You already placed a bid for this product", 400);

		const data = await BidService.createNewBid({
			user,
			product: productId,
			bidPrice,
		});
		return res.status(201).json(data);
	} catch (e) {
		next(e);
	}
};

const updateBid = async (req, res, next) => {
	const { id } = req.params;
	const { bidPrice } = req.body;
	try {
		const bid = await Bid.findOne({ _id: id }).populate("user");
		const product = await Product.findOne({ _id: bid.product });

		// Check if the current date is after the product's end date
		const currentDate = new Date();
		if (currentDate > product.endDate) {
			throw error("Bidding has ended for this product", 400);
		}

		const existingHighestBid = await Bid.findOne({
			product: product,
		})
			.sort({ bidPrice: -1 })
			.exec();

		if (bidPrice <= product.minBidPrice)
			throw error("Bid must be greater than min bid price.");

		if (!bid || bid.user.email !== req.user.email)
			throw error("Unauthorized", 403);

		if (existingHighestBid && bidPrice <= existingHighestBid.bidPrice)
			throw error("New bid must be higher than the existing highest bid.");

		const data = await BidService.updateBid(id, { bidPrice });
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const deleteBid = async (req, res, next) => {
	const { id } = req.params;
	try {
		const bid = await Bid.findOne({ _id: id }).populate("user");
		if (!bid || bid.user.email !== req.user.email)
			throw error("Unauthorized", 403);

		const product = await Product.findOne({ _id: bid.product });

		// Check if the current date is after the product's end date
		const currentDate = new Date();
		if (currentDate > product.endDate) {
			throw error("Bidding has ended for this product", 400);
		}

		await Bid.findByIdAndRemove(id);
		return res.status(200).json({ message: "Bid deleted successfully" });
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getBidsByProduct,
	getBidsByUser,
	createBid,
	updateBid,
	deleteBid,
};
