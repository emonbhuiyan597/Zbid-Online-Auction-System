const router = require("express").Router();
const { getUsers, getUser } = require("../controllers/userController");
const superAdmin = require("../middlewares/superAdmin");

router.get("/", superAdmin, getUsers);
router.get("/:email", superAdmin, getUser);

module.exports = router;
