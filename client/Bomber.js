define(
        ['jquery', 'Map', 'Sprite', '../geometry/geometry'],
        function ($, Map, Sprite, geometry) {
    var Bomber;
    var map = Map.load();
    var blocks = [];
    var players = [];
    var html = '';
    var i;
    //try {
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
        };
    //} catch (e) {
    //    console.log('EXCEPTION', e.message || e);
    //}
    return Bomber;
});

