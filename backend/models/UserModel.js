const { model, Schema } = require("mongoose");

const vendorSchema = new Schema({
	vendorName: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	shopUrl: {
		type: String,
		required: true,
	},
	money: {
		type: Number,
		required: false,
		default: 0,
	},
});

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 30,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
			validate: {
				validator: function (v) {
					return /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/.test(v);
				},
				message: (prop) => `Invalid Phone Number: ${prop.value}`,
			},
		},
		email: {
			type: String,
			required: true,
			unique: true,
			validate: {
				validator: function (v) {
					return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
				},
				message: (prop) => `Invalid email: ${prop.value}`,
			},
		},
		cardNumber: {
			type: String,
			required: true,
			minlength: 15,
			maxlength: 16,
			validate: {
				validator: function (v) {
					return /^\d{15,16}$/.test(v);
				},
				message: (prop) => `Invalid card: ${prop.value}`,
			},
		},
		cvv: {
			type: String,
			required: true,
			minlength: 3,
			maxlength: 4,
			validate: {
				validator: function (v) {
					return /^\d{3,4}$/.test(v);
				},
				message: (prop) => `Invalid cvv: ${prop.value}`,
			},
		},
		address: {
			type: String,
		},
		zipCode: {
			type: String,
			minlength: 4,
			maxlength: 10,
		},
		password: {
			type: String,
			minlength: [6, "password is too short"],
			required: true,
		},
		isSuperAdmin: {
			type: Boolean,
			default: false,
		},
		vendor: {
			type: vendorSchema,
		},
		// shopUrl: {
		// 	type: String,
		// 	required: true,
		// },
	},
	{ timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
