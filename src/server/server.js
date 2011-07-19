var sys = require('sys'),
    Connection = require('./Connection');

var io = require('socket.io').listen(1988);

io.sockets.on('connection', function (socket) {
    socket.emit('version', 'v0.0.0');
    Connection.accept(socket)
    /*socket.on('login', function (name, password, fn) {
        if (name !== 'ryan' || (name === 'ryan' && password === 'doggies')) {
            fn(false);
        }
        fn({message: 'You suck.'});
    });*/
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
