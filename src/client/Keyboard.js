define(['jquery', 'events'], function($, events) {
    function Keyboard() {
        var that = this;
        this.bindings = {};

        $(document).keydown(function (e) {
            var eventName = that.bindings[e.keyCode];
            if (typeof eventName !== 'undefined') {
                that.emit('all', eventName, 'down');
                that[eventName] = true;
            }
        });

        $(document).keyup(function (e) {
            var eventName = that.bindings[e.keyCode];
            if (typeof eventName !== 'undefined') {
                that.emit('all', eventName, 'up');
                that[eventName] = false;
            }
        });
    };

    Keyboard.prototype = Object.create(events.EventEmitter.prototype);

    Keyboard.prototype.mapBinding = function (keycode, eventName) {
        this.bindings[keycode] = eventName;
        this[eventName] = false;
    }

    Keyboard.prototype.getBindings = function () {
        return this.bindings;
    }

    return Keyboard;
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
