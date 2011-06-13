// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: true, maxerr: 50, indent: 4 */
define(['geometry', './Map', './Sprite', 'events'], function (geometry,
        Map, Sprite, events) {
    function World() {
        var world,
            map = Map.generateTestMap(),
            blocks = [],
            sprites = [];

        // Temporarily generating random blocks for testing
        for (i = 0; i < 20; i += 1) {
            blocks.push(new Sprite({
                width: 32,
                height: 32,
                x: 32 * (1 + Math.floor(13 * Math.random())),
                y: 32 * (1 + 2 * Math.floor(6 * Math.random())),
                image: 'block.png'
            }));
        }
        
        world = Object.create(events.EventEmitter.prototype);
        
        world.rectIntersects = function (rect) {
            var i, x, y;
            for (y = 0; y < map.params.height; y += 1) {
                for (x = 0; x < map.params.width; x += 1) {
                    if (map.isWall(x, y) && rec.intersects(new geometry.Rect([
                            x * Map.TILE_WIDTH, y * Map.TILE_HEIGHT],
                            [Map.TILE_WIDTH, Map.TILE_HEIGHT]))) {
                        return true;
                    }
                }
            }

            for (i = 0; i < blocks.length; i += 1) {
                if (rec.intersects(new geometry.Rect([blocks[i].params.x,
                        blocks[i].params.y], [blocks[i].params.width - 0.5,
                        blocks[i].params.height - 0.5]))) {
                    return true;
                }
            }
            return false;
        };
        
        world.addSprite = function (sprite) {
            sprites.push(sprite);
            sprite.world = world;
        };
        
        world.moveSprite = function (sprite, direction, distance) {
        
        };
        
        world.render = function () {
            world.emit('render.map', map.createHTML());
            world.renderSprites();
        };
        
        world.renderSprites = function () {
            var i, html = '';
            for (i = 0; i < blocks.length; i += 1) {
                html += blocks[i].createHTML();
            }
            world.emit('render.sprites', html);
        };
        
        return world;
    }
    return World;
});

