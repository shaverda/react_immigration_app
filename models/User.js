var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	first_name: { type: String },
	last_name: { type: String },
	street_number: {type: Number},
	street_name: {type: String},
	city: {type: String},
	state: {type: String},
	zipcode: {type: Number},
	survey_step: {type: String}
});

var User = mongoose.model("User", UserSchema);

module.exports = User;

