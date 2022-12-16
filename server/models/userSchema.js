import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		groupId: {
			type: Number,
			required: false,
		},
	},
	{ timestamps: true },
	{ strict: false },
);

userSchema.statics.signup = async function (email, password) {
	const exists = await this.findOne({ email });

	if (exists) throw Error("Email already in use");

	const saltRounds = 10;

	const hash = await bcrypt.hash(password, saltRounds);

	const user = await this.create({ email: email, password: hash });

	return user;
};

const User = mongoose.model("User", userSchema);
export default User;

// This set up is different from the jobsite schema. That one was not truly defined until the createjob controller.
// I believe this sets it up here. trying both methods to see what I like better.
