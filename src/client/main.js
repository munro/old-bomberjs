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
        'underscore': '../../deps/underscore-1.1.6.min'
    }
}, ['Bomber'], function (Bomber) {
    Bomber.init();
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
