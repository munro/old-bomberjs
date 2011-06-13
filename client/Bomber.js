// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
define(['jquery', 'World', 'events', './Player'], function ($, World, events, Player) {
    var bomber,
        world = World();

    bomber = {
        init: function () {
            world.on('render.map', function (html) {
                $('#game .map').html(html);
            });

            world.on('render.sprites', function (html) {
                $('#game .sprites').html(html);
            });

            world.render();

            var a = new Player();

            console.log('foobar', a);
        }
    };

    return bomber;
});

