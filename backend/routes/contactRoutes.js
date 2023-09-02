const router = require("express").Router();
const {
	getContacts,
	getContact,
	createContact,
	updateContact,
	deleteContact,
} = require("../controllers/contactController");
const superAdmin = require("../middlewares/superAdmin");

router.get("/", getContacts);
router.post("/", createContact);
router.get("/:id", superAdmin, getContact);
router.patch("/:id", superAdmin, updateContact);
router.delete("/:id", superAdmin, deleteContact);

module.exports = router;
