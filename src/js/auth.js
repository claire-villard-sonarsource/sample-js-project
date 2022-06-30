var config = require("../config"),
    pgp = require('pg-promise')();

function do_auth(username, password) {
    var db = pgp(config.db.connectionString);
    var q = "SELECT * FROM users WHERE name = '" + username + "' AND password ='" + password + "';";
    return db.one(q);
}

alert("oups");

module.exports = do_auth;
