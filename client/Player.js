// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: true, maxerr: 50, indent: 4 */
define(['./Sprite', './Block'], function (Sprite, Block) {
    function Player() {
        Sprite.call(this, {
            width: 32,
            height: 32,
            x: 32 * (1 + Math.floor(13 * Math.random())),
            y: 32 * (1 + 2 * Math.floor(6 * Math.random())),
            image: 'player.png'
        });
    }
    
    Player.prototype = Object.create(Sprite.prototype);

    Player.prototype.foobar = function () {
        console.log('hell yeah');
    };

    Player.prototype.move = function(direction, distance) {
        var x = this.params.x,
            y = this.params.y,
            rect = this.rect,
            intersects = false;

        /* move and check for collision */
        Sprite.prototype.move.call(this, direction, distance);
        intersects = this.world.rectIntersects(this.rect);
        console.log(intersects);

        if(true === intersects) { /* a wall, undo move */
            this.params.x = x;
            this.params.y = y;
            this.rect = rect;
        } else if(intersects instanceof Block) { /* destroy! */
            interesects.destroy();
        }
    }

    return Player;
});

