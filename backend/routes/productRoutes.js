const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const {
	getProducts,
	getProduct,
	updateProduct,
	deleteProduct,
	createProduct,
	getVendorProductsBy,
	makePayment,
	relatedProducts,
} = require("../controllers/productController");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		const ext = path.extname(file.originalname);
		const fileName =
			file.originalname.replace(ext, "").toLowerCase().split(" ").join("-") +
			"-" +
			Date.now() +
			ext;
		cb(null, fileName);
	},
});
const upload = multer({ storage });

const authenticate = require("../middlewares/authenticate");

router.get("/related/:productId", relatedProducts);
router.get("/vendor-products/", authenticate, getVendorProductsBy);
router.get("/payment/:productId", authenticate, makePayment);
router.get("/", getProducts);
router.post("/", authenticate, upload.single("image"), createProduct);
router.get("/:id", getProduct);
router.patch("/:id", authenticate, upload.single("image"), updateProduct);
router.delete("/:id", authenticate, deleteProduct);

module.exports = router;
