define(['jquery', 'events'], function($, events) {
  function Keyboard() {
    this.bindings = {};
    var _that = this;

    $(document).keydown(function(e) {
      var eventName = _that.bindings[e.keyCode];
      if(typeof eventName !== 'undefined')
        _that[eventName] = true;
    });

    $(document).keyup(function(e) {
      var eventName = _that.bindings[e.keyCode];
      if(typeof eventName !== 'undefined')
        _that[eventName] = false;
    });

  };

  Keyboard.prototype = Object.create(events.EventEmitter.prototype);

  Keyboard.prototype.mapBinding = function(keycode, eventName) {
    this.bindings[keycode] = eventName;
    this[eventName] = false;
  }

  Keyboard.prototype.getBindings = function() {
    return this.bindings;
  }

  return Keyboard;
});
