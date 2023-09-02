const router = require("express").Router();
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const categoryRoutes = require("./categoryRoutes");
const productRoutes = require("./productRoutes");
const bidRoutes = require("./bidRoutes");
const statsRoutes = require("./statsRoutes");
const contactRoutes = require("./contactRoutes");

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/users", userRoutes);
router.use("/api/v1/categories", categoryRoutes);
router.use("/api/v1/products", productRoutes);
router.use("/api/v1/bids", bidRoutes);
router.use("/api/v1/statistics", statsRoutes);
router.use("/api/v1/contacts", contactRoutes);

module.exports = router;
