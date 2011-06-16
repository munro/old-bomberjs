// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: true, maxerr: 50, indent: 4 */
define(['geometry', './Sprite', './Block'], function (geometry, Sprite, Block) {
    var direction;

    function Player() {
        Sprite.call(this, {
            width: 32,
            height: 32,
            x: 32 * (1 + Math.floor(13 * Math.random())),
            y: 32 * (1 + 2 * Math.floor(6 * Math.random())),
            image: 'player.png'
        });

        direction = [[-1,0],[1,0],[0,1],[0,1]][Math.random() * 4];
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
        intersects2 = this.world.rectIntersects(rect);
        Sprite.prototype.move.call(this, direction, distance);
        intersects = this.world.rectIntersects(this.rect);

        if(true === intersects) { /* a wall, undo move */
            this.params.x = x;
            this.params.y = y;
            this.rect = new geometry.Rect([x,y], [this.params.width, this.params.height]); 
            return false;
        } else if(intersects instanceof Block) { /* destroy! */
            intersects.destroy();
        }

        return true;
    }

    return Player;
});

