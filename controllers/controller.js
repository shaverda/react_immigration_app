var User = require("../models/User");

module.exports = {
    search: function(email, cb) {
        // console.log("this is in my controller search");
        // console.log(email);
        User.find({}, function (err, person) {
          if (err) return handleError(err);
          console.log(person);
          cb(person);
        })
    },

    create: function(email, cb) {
        var user = { email };
        User.create(user, function(err, person) {
            if (err) console.log(err);
            else {
                console.log(person);
                // Place the log back in this callback function
                // so it can be used with other functions asynchronously
                cb(person);
            }
        })

    }





};
