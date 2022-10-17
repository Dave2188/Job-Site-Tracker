import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jobSiteRoutes from "./routes/routes.js";

const app = express();

app.use(cors());

app.use("/Jobs", jobSiteRoutes);

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

app.listen(PORT, () => console.log(`server running on port ${PORT}`));