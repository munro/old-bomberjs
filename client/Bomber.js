define(
        ['jquery', 'Map', 'Sprite', '../geometry.js/geometry'],
        function ($, Map, Sprite, geometry) {
    var Bomber;
    var map = Map.load();
    var blocks = [];
    var players = [];
    var html = '';
    var i;
    
    // randomize blocks
    for (i = 0; i < 20; i += 1) {
        blocks.push(new Sprite({
            width: 32,
            height: 32,
            x: 32 * (1 + Math.floor(13 * Math.random())),
            y: 32 * (1 + 2 * Math.floor(6 * Math.random())),
            image: 'block.png'
        }));
    }
    $('#game .map').html(map.createHTML());

    for (i = 0; i < blocks.length; i += 1) {
        html += blocks[i].createHTML();
    }
    $('#game .sprites').html(html);
    
    Bomber = {
        hey: function () {
            console.log('HEY' );
        }
            var player = new Sprite({
                width: 32,
                height: 32,
                x: 32 * (1 + Math.floor(13 * Math.random())),
                y: 32 * (1 + 2 * Math.floor(6 * Math.random())),
                image: 'player.png'
            });

            html += player.createHTML();
        $('#game .sprites').html(html);
        
        Bomber = {
            hey: function () {
                console.log('HEY' );
            }
        };
    //} catch (e) {
    //    console.log('EXCEPTION', e.message || e);
            //}
            var rec = new geometry.Rect([32,32], [31.5, 31.5]);
            var hit = 
            (function (rect) {
                for (var y = 0; y < map.params.height; y += 1) {
                    for (var x = 0; x < map.params.width; x += 1) {
                        if (map.isWall(x, y) && rec.intersects(new geometry.Rect([x*32, y*32], [31.5, 31.5])))
                            return true;
                    }
                }

                for (var i = 0; i < blocks.length; i += 1) {
                    if (rec.intersects(new geometry.Rect([blocks[i].params.x, blocks[i].params.y], [blocks[i].params.width - .5, blocks[i].params.height - .5]))) {
                        return true;
                    }
                }
                return false;
            }(rec));
            
    console.log(hit);
    return Bomber;
});

