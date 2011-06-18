define(['jquery', 'World', 'events', './Player', './Keyboard', './PlayerInputController'], function ($, World, events, Player, Keyboard, PlayerInputController) {
    var bomber,
        moves = [[0,-1],[1,0],[0,1],[-1,0]],
        world = new World(),
        controller = new Keyboard();

    bomber = {
        init: function () {
            var direction = [0, 0];

            /* map keys */
            controller.mapBinding(37, 'left');
            controller.mapBinding(38, 'up');
            controller.mapBinding(39, 'right');
            controller.mapBinding(40, 'down');
            controller.mapBinding(13, 'bomb');

            world.on('render.map', function (html) {
                $('#game .map').html(html);
            });

            world.on('render.sprites', function (html) {
                $('#game .sprites').html(html);
            });

            var a = new Player();
            new PlayerInputController(a, controller);
            world.addSprite(a);
            world.render();
        }
    };

    return bomber;
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
