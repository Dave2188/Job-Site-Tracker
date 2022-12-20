import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jobSiteRoutes from "./routes/routes.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/jobs", jobSiteRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 4000;

const URI = `mongodb+srv://${process.env.MONGO_URI}`;

const connection = async () => {
	try {
		await mongoose.connect(URI, { useNewUrlParser: true });
		console.log("connected to database");
	} catch (error) {
		console.log(error);
	}
};
connection();

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
