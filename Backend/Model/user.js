const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	mobileno: {
		type: String,
		required: true,
	},
	NIC: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
	},
	
	password: {
		type: String,
		required: true,
	},
	userRole: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},

	Balance:{
		type:Number,
		
	},
});

module.exports = User = mongoose.model("user", UserSchema);