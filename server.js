// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require("axios");

require('dotenv').config()

// todo: include db schemas
var User = require("./models/User");
var user_controller = require("./controllers/controller");

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

// mongoose.connect("mongodb://heroku_d29qv78x:3gv81po3gongufm9f8762dalfv@ds161950.mlab.com:61950/heroku_d29qv78x");
mongoose.connect("mongodb://localhost/React");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
};

app.post("/api/send_email", function(req, res) {
    var helper = require('sendgrid').mail;

    from_email = new helper.Email("shaverda@gmail.com");
    to_email = new helper.Email("shaverda@gmail.com");
    subject = `Email from ${req.body.name} ${req.body.email} at immigration portal`;
    content = new helper.Content("text/plain", req.body.message);
    mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    sg.API(request, function(error, response) {
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
        res.end();
    })

})


app.get("/api/user_search/:email?", function(req, res) {
    console.log(req.params.email);
    User.find({ "email": req.params.email }, function(error, data) {
        if (error) {
            res.send(error);
        } else {
            console.log(data);
            res.send(data);
        }
    });

});


app.get("/api/user_create/:email", function(req, res) {
    // user_controller.create(req.params.email, function(err, data) {
    //     console.log(data);
    //     res.json(data);
    // })
    let user = new User(req.params);
    user.save(function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    })
})

app.post("/api/validate_address", function(req, res){
    var address_validator_url = "https://us-street.api.smartystreets.com/street-address?auth-id=" + process.env.SMARTYSTREETS_AUTH_ID + "&auth-token=" + process.env.SMARTYSTREETS_AUTH_TOKEN + "&street=" + req.body.street_number + "%20" + req.body.street_name + "&city=" + req.body.city + "&state=" + req.body.state + "&zipcode=" + req.body.zipcode;
    console.log(address_validator_url);

    axios.get(address_validator_url)
    .then(function(response) {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(function(error) {
        console.log(error);
    });
})

app.post("/api/post_user", function(req, res) {
    var query = { '_id': req.body.db_id.toObjectId() };
    console.log(req.body);
    User.findOneAndUpdate(query, { $set: { first_name: req.body.first_name, last_name: req.body.last_name, street_number: req.body.street_number, street_name: req.body.street_name, city: req.body.city, state: req.body.state, zipcode: req.body.zipcode, survey_step: req.body.survey_step } }, { new: true },
        function(error, data) {
            console.log(data);
            if (error) {
                res.send(error);
            } else {
                console.log(data);
                res.send(data);
            }
        });

})
app.post("/api/update_survey_step/:email?", function(req, res){
    console.log(req.params.email);
    User.findOneAndUpdate({ "email": req.params.email }, { $set: { survey_step: req.body.survey_step} }, { new: true },function(error, data) {
        if (error) {
            res.send(error);
        } else {
            console.log(data);
            res.send(data);
        }
    });
})


app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
// -------------------------------------------------

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
