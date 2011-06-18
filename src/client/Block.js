define(['./Sprite'], function(Sprite) {
    function Block() {
        Sprite.call(this, {
            width: 32,
            height: 32,
            x: 32 * (1 + Math.floor(13 * Math.random())),
            y: 32 * (1 + 2 * Math.floor(6 * Math.random())),
            image: 'block.png'
        });
    }

    Block.prototype = Object.create(Sprite.prototype);

    return Block;
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
