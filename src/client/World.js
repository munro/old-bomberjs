// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: true, maxerr: 50, indent: 4 */
define(['geometry', './Map', './Sprite', './Block', 'events'], 
        function (geometry, Map, Sprite, Block, events) {
    function World() {
        var map = Map.generateTestMap(),
            sprites = [];

        this.intersects = function (shape) {
            var i, x, y;

            // TODO: this algorithm only works for same size collisions
            for(x = 0; x < shape.size[0]; ++x) {
                for(y = 0; y < shape.size[1]; ++y) {
                    if(map.isWall(Math.floor((shape.point[0] + x) / Map.TILE_WIDTH),
                            Math.floor((shape.point[1] + y) / Map.TILE_HEIGHT))) {
                        return true;
                    }
                }
            }

            for (i = 0; i < sprites.length; i += 1) {
                if (shape.intersects(new geometry.Rect([sprites[i].params.x,
                        sprites[i].params.y], [sprites[i].params.width - 0.5,
                        sprites[i].params.height - 0.5]))) {
                    return sprites[i];
                }
            }
            return false;
        };
        
        this.addSprite = function (sprite) {
            sprites.push(sprite);
            sprite.world = this;
        };

        this.removeSprite = function (sprite) {
            var i = sprites.indexOf(sprite);
            if(i >= 0)
                sprites.splice(i, 1);
        };
        
        /* world directions */
        this.NORTH = [0, -1];
        this.SOUTH = [0, 1];
        this.EAST = [1, 0];
        this.WEST = [-1, 0];

        this.moveSprite = function (sprite, direction, distance) {
            sprite.params.x += distance * direction[0];
            sprite.params.y += distance * direction[1];
            sprite.rect = new geometry.Rect([sprite.params.x, sprite.params.y],
                    [sprite.params.width, sprite.params.height]); 
        };
        
        this.render = function () {
            this.emit('render.map', map.createHTML());
            this.renderSprites();
        };
        
        this.renderSprites = function () {
            var i, html = '';
            for (i = 0; i < sprites.length; i += 1) {
                html += sprites[i].createHTML();
            }
            this.emit('render.sprites', html);
        };

        // Temporarily generating random blocks for testing
        for (i = 0; i < 20; i += 1) {
            var block = new Block();
            this.addSprite(block);
        }
    }
    
    World.prototype = Object.create(events.EventEmitter.prototype);
    
    return World;
});

