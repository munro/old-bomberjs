// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
define(['jquery', 'World', 'events', './Player', './Keyboard'], function ($, World, events, Player, Keyboard) {
    var bomber,
        moves = [[0,-1],[1,0],[0,1],[-1,0]],
        world = World(),
        controller = new Keyboard();

    

    bomber = {
        init: function () {
            var direction = [0,0];

            /* map keys */
            controller.mapBinding(37, 'left');
            controller.mapBinding(38, 'up');
            controller.mapBinding(39, 'right');
            controller.mapBinding(40, 'down');

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
                var dx = controller['left'] * -1 + controller['right'],
                    dy = controller['up'] * -1 + controller['down'];

                a.move([dx,0], 4);
                a.move([0,dy], 4);

                world.render();
            }, 50);
        }
    };

    return bomber;
});

