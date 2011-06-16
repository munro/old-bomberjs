// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
define(['jquery', 'World', 'events', './Player'], function ($, World, events, Player) {
    var bomber,
        moves = [[0,-1],[1,0],[0,1],[-1,0]],
        world = World();

    

    bomber = {
        init: function () {
            var direction = moves[Math.floor(Math.random() * moves.length)];

            world.on('render.map', function (html) {
                $('#game .map').html(html);
            });

            world.on('render.sprites', function (html) {
                $('#game .sprites').html(html);
            });


            var a = new Player();
            world.addSprite(a);

            console.log('foobar', a);
            setInterval(function() {
                if(false === a.move(direction, 1)) {
                    direction = moves[(moves.indexOf(direction) + 1) % moves.length];
                }
                world.render();
            }, 50);
        }
    };

    return bomber;
});

