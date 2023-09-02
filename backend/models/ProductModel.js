const { model, Schema } = require("mongoose");

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		minBidPrice: {
			type: Number,
			required: true,
		},
		startDate: {
			type: Date,
			required: true,
		},
		endDate: {
			type: Date,
			required: true,
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: "Category",
			required: true,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		isPaid: {
			type: Boolean,
			default: false,
		},
		paidBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const Product = model("Product", productSchema);

module.exports = Product;
