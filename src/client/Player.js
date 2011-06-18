define(['geometry', './Sprite', './Block', './Bomb'], function (geometry, Sprite, Block, Bomb) {
    var direction;

    function Player() {
        Sprite.call(this, {
            width: 32,
            height: 32,
            x: 32 * (1 + Math.floor(13 * Math.random())),
            y: 32 * (1 + 2 * Math.floor(6 * Math.random())),
            image: 'player.png'
        });

        direction = [[-1, 0], [1, 0], [0, 1], [0, 1]][Math.random() * 4];
    }
    
    Player.prototype = Object.create(Sprite.prototype);

    Player.prototype.foobar = function () {
        console.log('hell yeah');
    };

    Player.prototype.placeBomb = function() {
        this.world.addSprite(new Bomb(this.params.x, this.params.y));
    }

    Player.prototype.move = function(direction, distance) {
        var x = this.params.x,
            y = this.params.y,
            rect = this.rect,
            intersects = false;

        /* move and check for collision */
        intersects2 = this.world.intersects(rect);
        Sprite.prototype.move.call(this, direction, distance);
        intersects = this.world.intersects(this.rect);

        if(intersects instanceof Player || intersects instanceof Bomb) {
            this.world.render();
            return true;
        }
        
        this.params.x = x;
        this.params.y = y;
        this.rect = new geometry.Rect([x, y], [this.params.width, this.params.height]); 
        
        return false;
    }

    return Player;
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
