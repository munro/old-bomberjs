if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

require({
    paths: {
        'events': '../../deps/events',
        'geometry': '../../deps/geometry.js/geometry',
        'jquery': '../../deps/jquery-1.6.min',
        'json2': '../../deps/json2',
        'socket.io': '../../deps/socket.io/dist/socket.io',
        'underscore': '../../deps/underscore-1.1.6.min'
    },
    urlArgs: 'bust=' + (new Date()).getTime()
}, ['Bomber'], function (Bomber) {
    var socket = io.connect('http://localhost:1988');
    socket.on('version', function () {
        socket.emit('login', 'ryan', 'doggies', function (err) {
            console.log(err);
        });
        console.log(arguments);
    });
    Bomber.init();
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
