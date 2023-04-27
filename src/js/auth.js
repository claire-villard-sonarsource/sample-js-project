var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    alert("Here is the password: " + password);
    var db = pgp(config.db.connectionString);
    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";
    alert("Here is the password, again: " + password);
    return db.one(q);
}

module.exports = do_auth;
