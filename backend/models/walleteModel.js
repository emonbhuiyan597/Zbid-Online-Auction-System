const { model, Schema } = require("mongoose");

const WalletSchema = new Schema({
	amount: {
		type: Number,
		required: true,
	},
});

const Wallet = model("Wallet", WalletSchema);
module.exports = Wallet;
