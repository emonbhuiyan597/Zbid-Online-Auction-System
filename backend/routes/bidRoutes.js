const router = require("express").Router();
const {
	getBidsByProduct,
	getBidsByUser,
	createBid,
	updateBid,
	deleteBid,
} = require("../controllers/bidController");

const authenticate = require("../middlewares/authenticate");

router.get("/user/:userId", getBidsByUser);
router.get("/:productId", getBidsByProduct);
router.post("/:productId", authenticate, createBid);
router.patch("/:id", authenticate, updateBid);
router.delete("/:id", authenticate, deleteBid);

module.exports = router;
