const mongoose = require("mongoose");

function connectDB(connectionStr) {
	return mongoose.connect(connectionStr, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
}

module.exports = connectDB;
