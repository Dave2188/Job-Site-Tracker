import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

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

userSchema.statics.login = async function (email, password) {
	if (!email || !password) throw Error("All fields must be filled out");

	const user = await this.findOne({ email });
	if (!user) throw Error("Incorrect Email");

	const match = await bcrypt.compare(password, user.password);
	if (!match) throw Error("Incorrect Password");

	return user;
};

userSchema.statics.signup = async function (email, password) {
	if (!email || !password) throw Error("All fields must be filled out");
	if (!validator.isEmail(email)) throw Error("Email is not valid");
	if (!validator.isStrongPassword(password)) throw Error("Password is not strong enough");

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
