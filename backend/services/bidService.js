const Bid = require("../models/BidModel");
const error = require("../utils/error");

const findBidByProperty = (key, value) => {
	if (key === "_id") {
		return Bid.findById(value);
	}
	return Bid.findOne({ [key]: value });
};

const createNewBid = ({ user, product, bidPrice }) => {
	const bid = new Bid({
		user,
		product,
		bidPrice,
	});
	return bid.save();
};

const updateBid = async (id, data) => {
	const bid = await findBidByProperty("_id", id);
	if (!bid) throw error("Bid not found", 404);
	return Bid.findByIdAndUpdate(id, { ...data }, { new: true });
};

const deleteBid = async (id) => {
	const bid = await findBidByProperty("_id", id);
	if (!bid) throw error("Bid not found", 404);
	return bid.remove();
};

module.exports = {
	findBidByProperty,
	createNewBid,
	updateBid,
	deleteBid,
};
