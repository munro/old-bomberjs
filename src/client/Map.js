// vim: ts=4 sw=4 sts=4 et:
/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: true, maxerr: 50, indent: 4 */
define(function (require) {
    function Map(params) {
        this.params = params;
    }
    
    Map.prototype.isWall = function (x, y) {
        if (x < 0 || y < 0 || x >= this.params.width || y >= this.params.height) {
            throw new RangeError();
        } else {
            return this.params.tiles[x + y * this.params.width] === 1;
        }
    }
    
    Map.prototype.createHTML = function () {
        var x, y, html;
        
        html = '<div class="bomber-map" style="width:' +
            (Map.TILE_WIDTH * this.params.width) + 'px">';
        for (y = 0; y < this.params.height; y += 1) {
            for (x = 0; x < this.params.width; x += 1) {
                html += '<div style="background-position:0 -' +
                    (this.params.tiles[x + y * this.params.width] * 32) +
                    'px;"></div>';
            }
        }
        return html + '</div>';
    };
    
    Map.generateTestMap = function () {
        var x, y, width = 15, height = 13, tiles = [];
        for (y = 0; y < height; y += 1) {
            for (x = 0; x < width; x += 1) {
                if (x === 0 || x + 1 === width || y === 0 || y + 1 === height) {
                    tiles.push(1);
                } else if (x % 2 === 0 && y % 2 === 0) {
                    tiles.push(1);
                } else if (x % 2 === 0 && y % 2 === 1 || y === 1) {
                    tiles.push(2);
                } else {
                    tiles.push(0);
                }
            }
        }
        return new Map({
            tileset: 'media/tilesets/bomberman_snes.png',
            width: width,
            height: height,
            tiles: tiles
        });
    };
    
    Map.TILE_WIDTH = 32;
    Map.TILE_HEIGHT = 32;
    
    return Map;
});

