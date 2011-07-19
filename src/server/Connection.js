var User = require('./User');

function Connection(socket) {
    var that = this;

    this.socket = socket;

    socket.on('login', function (user, password, fn) {
        if (User.authenticate(user, password)) {
            fn(false);
            User.login(that, user);
        } else {
            fn('You suck');
        }
    });
}

Connection.connections = [];

Connection.accept = function (socket) {
    Connection.connections.push(new Connection(socket));
};

Connection.prototype = Object.create(require('events').EventEmitter);

module.exports = Connection;

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
