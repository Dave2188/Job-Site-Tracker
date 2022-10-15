const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;

const URI = "mongodb+srv://davidfox:jobsitetracker123@cluster0.pclssj1.mongodb.net/?retryWrites=true&w=majority";

const connection = async () => {
	try {
		await mongoose.connect(URI, { useNewUrlParser: true });
		console.log("connected to database");
	} catch (error) {
		console.log(error);
	}
};
connection();

// app.get("/", function (req, res) {
// 	res.send("Hello World");
// });

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
