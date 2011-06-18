define(['jquery', 'events'], function($, events) {
    function PlayerInputController(player, keyboard) {
        var timer = false;
        
        keyboard.on('all', function (key, pos) {
            if (pos === 'down') {
                startTimer();
            }
        });
        
        function startTimer() {
            if (timer) {
                return;
            }
            timer = setInterval(function() {
                var dx = keyboard['left'] * -1 + keyboard['right'],
                    dy = keyboard['up'] * -1 + keyboard['down'];

                if (dx === 0 && dy === 0) {
                    clearInterval(timer);
                    timer = false;
                } else {
                    player.move([dx, 0], 4);
                    player.move([0, dy], 4);
                }
            }, 50);
        }
    };

    return PlayerInputController;
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
