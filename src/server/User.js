function User() {
}
User.prototype = require('core.User').prototype;
User.login = function (name, password) {
};

// alternate option
var User = require('base.User');
User.mixin('foobar', function () {});

export = User;

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
