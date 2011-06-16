define(['events'], function(events) {
  function Keyboard() {
    

  };

  Keyboard.prototype = Object.create(events.EventEmitter.prototype);

  /* keys */


  return Keyboard;
});
