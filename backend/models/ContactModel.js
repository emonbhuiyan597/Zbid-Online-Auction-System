const { model, Schema } = require("mongoose");

const contactSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		message: {
			type: String,
			required: true,
			unique: true,
		},
		isRead: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Contact = model("Contact", contactSchema);
module.exports = Contact;
