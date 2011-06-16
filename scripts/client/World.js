// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: true, maxerr: 50, indent: 4 */
define(['geometry', './Map', './Sprite', './Block', 'events'], 
        function (geometry, Map, Sprite, Block, events) {
    function World() {
        var world,
            map = Map.generateTestMap(),
            sprites = [];

        world = Object.create(events.EventEmitter.prototype);
        
        world.rectIntersects = function (rect) {
            var i, x, y;

            /* wall? */
            for(x = 0; x < rect.size[0]; ++x) {
                for(y = 0; y < rect.size[1]; ++y) {
                    if(map.isWall(Math.floor((rect.point[0] + x) / Map.TILE_WIDTH),
                            Math.floor((rect.point[1] + y) / Map.TILE_HEIGHT))) {
                        return true;
                    }
                }
            }
/*            x = rect.point[0] % map.TILE_WIDTH;
            y = rect.point[1] % map.TILE_HEIGHT;


            if(map.isWall(x,y))
                return true;*/

            /*for (y = 0; y < map.params.height; y += 1) {
                for (x = 0; x < map.params.width; x += 1) {
                    if (map.isWall(x, y) && rect.intersects(new geometry.Rect([
                            x * Map.TILE_WIDTH, y * Map.TILE_HEIGHT],
                            [Map.TILE_WIDTH, Map.TILE_HEIGHT]))) {
                        return true;
                    }
                }
            }*/

            for (i = 0; i < sprites.length; i += 1) {
                if (rect.intersects(new geometry.Rect([sprites[i].params.x,
                        sprites[i].params.y], [sprites[i].params.width - 0.5,
                        sprites[i].params.height - 0.5]))) {
                    return sprites[i];
                }
            }
            return null;
        };
        
        world.addSprite = function (sprite) {
            sprites.push(sprite);
            sprite.world = world;
        };

        world.removeSprite = function (sprite) {
            var i = sprites.indexOf(sprite);
            if(i >= 0)
                sprites.splice(i, 1);
        };
        
        /* world directions */
        world.NORTH = [0, -1];
        world.SOUTH = [0, 1];
        world.EAST = [1, 0];
        world.WEST = [-1, 0];

        world.moveSprite = function (sprite, direction, distance) {
            sprite.params.x += distance * direction[0];
            sprite.params.y += distance * direction[1];
            sprite.rect = new geometry.Rect([sprite.params.x, sprite.params.y],
                    [sprite.params.width, sprite.params.height]); 
        };
        
        world.render = function () {
            world.emit('render.map', map.createHTML());
            world.renderSprites();
        };
        
        world.renderSprites = function () {
            var i, html = '';
            for (i = 0; i < sprites.length; i += 1) {
                html += sprites[i].createHTML();
            }
            world.emit('render.sprites', html);
        };

        // Temporarily generating random blocks for testing
        for (i = 0; i < 20; i += 1) {
            var block = new Block();
            world.addSprite(block);
        }
        
        
        return world;
    }
    return World;
});

