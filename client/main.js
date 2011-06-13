// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: true, maxerr: 50, indent: 4 */
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
require({
    paths: {
        'events': 'libs/events',
        'geometry': '../geometry.js/geometry',
        'jquery': 'libs/jquery-1.6.min',
        'json2': 'libs/json2',
        'underscore': 'underscore-1.1.6.min'
    }
}, ['Bomber'], function (Bomber) {
    Bomber.init();
});

