import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jobSiteRoutes from "./routes/routes.js";

const app = express();

app.use(cors());

app.use("/jobs", jobSiteRoutes);

const PORT = process.env.PORT || 4000;

const URI = "mongodb+srv://davidfox:foxtrot@cluster0.pclssj1.mongodb.net/?retryWrites=true&w=majority";

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
// 	res.send({ jobs });
// });

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
