const { model, Schema } = require("mongoose");

const BidSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		product: {
			type: Schema.Types.ObjectId,
			ref: "Product",
			required: true,
		},
		bidPrice: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

// Pre-save middleware to check if the new bid is the highest
BidSchema.pre("save", async function (next) {
	const existingHighestBid = await Bid.findOne({
		product: this.product,
	})
		.sort({ bidPrice: -1 })
		.exec();

	if (existingHighestBid && this.bidPrice <= existingHighestBid.bidPrice) {
		const error = new Error(
			"New bid must be higher than the existing highest bid."
		);
		return next(error);
	}

	next();
});

// Static method to find the highest bid for a product by a specific user
BidSchema.statics.findHighestBidByUser = function (productId, userId) {
	return this.findOne({ product: productId, user: userId })
		.sort({ bidPrice: -1 })
		.limit(1)
		.exec();
};

const Bid = model("Bid", BidSchema);
module.exports = Bid;
