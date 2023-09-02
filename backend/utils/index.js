require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
	JWT_SECRET_KEY,
};
