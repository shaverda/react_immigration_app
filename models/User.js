var mongoose = require("mongoose");

var Schema = mongoose.Schema;

let UserSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	first_name: { type: String },
	last_name: { type: String }
});

let User = mongoose.model("User", UserSchema);

module.exports = User;