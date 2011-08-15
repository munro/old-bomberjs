define(['jquery', 'events'], function($, events) {
    function PlayerInputController(player, keyboard) {
        var timer = false;
        var animation = 1;
        var flip = 0;
        
        keyboard.on('all', function (key, pos) {
            if (pos === 'down') {
                startTimer();
            }
        });

        keyboard.on('bomb', function() {
            player.placeBomb();
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
                    if( dx === 0 ) {
                        if( dy < 0 )
                            player.setImage('up' + animation + '.png');
                        else
                            player.setImage('down' + animation + '.png');
                    }
                    if( dy === 0 ) {
                        if( dx < 0 )
                            player.setImage('left' + animation + '.png');
                        else
                            player.setImage('right' + animation + '.png');
                    }
                    player.move([dx, 0], 4);
                    player.move([0, dy], 4);
                    if( animation === 3 ) 
                        flip = 1;
                    if( animation === 1 )
                        flip = 0;
                    if( flip === 0 )
                        animation++; 
                    else 
                        animation--;
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
