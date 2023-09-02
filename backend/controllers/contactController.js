const Contact = require("../models/ContactModel");

const getContacts = async (req, res, next) => {
	try {
		const data = await Contact.find({});
		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const getContact = async (req, res, next) => {
	const { id } = req.params;
	try {
		const data = await Contact.findById(id);
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const createContact = async (req, res, next) => {
	const { name, email, message } = req.body;
	try {
		const data = await Contact.create({ name, email, message, isRead: false });
		return res.status(201).json(data);
	} catch (e) {
		next(e);
	}
};

const updateContact = async (req, res, next) => {
	const { id } = req.params;
	try {
		if (!req.user.isSuperAdmin) throw error("Unauthorized", 403);

		const data = await Contact.findByIdAndUpdate(id, { isRead: true });
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const deleteContact = async (req, res, next) => {
	const { id } = req.params;
	try {
		if (!req.user.isSuperAdmin) throw error("Unauthorized", 403);

		await Contact.findByIdAndRemove(id);
		return res.status(200).json({ message: "Bid deleted successfully" });
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getContacts,
	getContact,
	createContact,
	updateContact,
	deleteContact,
};
