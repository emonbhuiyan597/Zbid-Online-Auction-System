require("dotenv").config();
const express = require("express");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const cors = require("cors");
const path = require("path");
const connectDB = require("./configs/db");
const routes = require("./routes");

const app = express();
const upload = multer({ dest: "uploads/" });
app.use(express.json());
app.use(cors());
app.use(routes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
	res.json({ message: "Hello, world!" });
});

app.use((err, req, res, next) => {
	console.log(err);
	const message = err.message ? err.message : "Server Error Occurred";
	const status = err.status ? err.status : 500;

	res.status(status).json({
		message,
	});
});

const PORT = process.env.PORT || 8000;

connectDB(`${process.env.DB_URI}`)
	.then(() => {
		console.log("Database Connected");
		app.listen(PORT, () => {
			console.log(`I am listening on port ${PORT}`);
		});
	})
	.catch((e) => console.log(e));
