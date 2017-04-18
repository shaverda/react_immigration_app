// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// todo: include db schemas
var User = require("./models/User");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------
//todo: make actual mongo db ugh!
// MongoDB Configuration configuration
mongoose.connect("mongodb://heroku_d29qv78x:3gv81po3gongufm9f8762dalfv@ds161950.mlab.com:61950/heroku_d29qv78x");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.post("/send_email", function(req, res){
	console.log("sending email soon server side...");
	var api_key = 'key-eddc8915d8bc564691ad385d4122ecaa';
	var domain = 'http://localhost:3000/contact';
	var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

	var data = {
	  from: 'Mailgun Sandbox <postmaster@sandbox7c886b76c8aa48258aae44136504d5f3.mailgun.org>',
	  to: 'shaverda@gmail.com',
	  subject: `Email from ${req.body.name} at immigration portal`,
	  text: req.body.message
	};
	console.log(data);
	mailgun.messages().send(data, function (error, body) {
  		console.log("sent email yo on back end");
  		res.end();
	});
})

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
