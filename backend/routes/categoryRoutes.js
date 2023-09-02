const router = require("express").Router();
const {
	getCategories,
	getCategory,
	createCategory,
	updateCategory,
	deleteCategory,
} = require("../controllers/categoryController");
const superAdmin = require("../middlewares/superAdmin");

router.get("/", getCategories);
router.post("/", superAdmin, createCategory);
router.get("/:id", superAdmin, getCategory);
router.patch("/:id", superAdmin, updateCategory);
router.delete("/:id", superAdmin, deleteCategory);

module.exports = router;
