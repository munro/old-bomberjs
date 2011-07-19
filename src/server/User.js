function User(params) {
}

User.users = [];

User.authenticate = function (name, password) {
    return true;
};

User.login = function (connection, name) {
    User.users.push(new User({
        socket: connection.socket,
        connection: connection,
        name: name
    }));
};

//User.prototype = require('core.User').prototype;

module.exports = User;

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
