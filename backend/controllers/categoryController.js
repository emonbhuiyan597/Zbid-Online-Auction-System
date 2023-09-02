const CategoryService = require("../services/CategoryService");

const getCategories = async (req, res, next) => {
	try {
		const data = await CategoryService.getCategories();
		res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const getCategory = async (req, res, next) => {
	const { id } = req.params;
	try {
		const data = await CategoryService.findCategoryByProperty("_id", id);
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const createCategory = async (req, res, next) => {
	const { name } = req.body;
	try {
		const data = await CategoryService.createNewCategory({ name });
		return res.status(201).json(data);
	} catch (e) {
		next(e);
	}
};

const updateCategory = async (req, res, next) => {
	const { id } = req.params;
	const { name } = req.body;
	try {
		const data = await CategoryService.updateCategory(id, { name });
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

const deleteCategory = async (req, res, next) => {
	const { id } = req.params;
	try {
		const data = await CategoryService.deleteCategory(id);
		return res.status(200).json(data);
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getCategories,
	getCategory,
	createCategory,
	updateCategory,
	deleteCategory,
};
