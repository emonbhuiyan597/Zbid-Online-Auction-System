const Category = require("../models/CategoryModel");
const error = require("../utils/error");

const getCategories = () => {
	return Category.find().sort({ createdAt: -1 });
};

const findCategoryByProperty = (key, value) => {
	if (key === "_id") {
		return Category.findById(value);
	}
	return Category.findOne({ [key]: value });
};

const createNewCategory = ({ name }) => {
	const category = new Category({
		name,
	});
	return category.save();
};

const updateCategory = async (id, data) => {
	const category = await findCategoryByProperty("_id", id);
	if (!category) throw error("Category not found", 404);
	return Category.findByIdAndUpdate(id, { ...data }, { new: true });
};

const deleteCategory = async (id) => {
	const category = await findCategoryByProperty("_id", id);
	if (!category) throw error("Category not found", 404);
	// return category.remove();
	await Category.findByIdAndRemove(id);
};

module.exports = {
	getCategories,
	findCategoryByProperty,
	createNewCategory,
	updateCategory,
	deleteCategory,
};
