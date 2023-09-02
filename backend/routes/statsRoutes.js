const router = require("express").Router();
const { getSummary } = require("../controllers/statsController");

router.get("/summary", getSummary);

module.exports = router;
