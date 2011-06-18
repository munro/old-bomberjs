define(['geometry', './Sprite', './Block'], function(geometry, Sprite, Block) {
    function Bomb(x, y) {
        Sprite.call(this, {
            width: 32,
            height: 32,
            x: x,
            y: y,
            image: 'bomb.png'
        });
    
        /* bomb blows up after 3 seconds */
        setTimeout(Bomb.prototype.explode, 3000);
    }

    Bomb.prototype = Object.create(Sprite.prototype);

    Bomb.prototype.explode = function() {
        console.log(this);
        var i,
            x = this.params.x,
            y = this.params.y,
            w = this.params.width,
            h = this.params.height,
            /* the proper indentation of this is left as an exercise for
               the reader... */
            intersections = 
                this.world.intersectSprites(
                    new geometry.Rect([x - w, y - h], [3 * w, 3 * h]),
                    function(obj) {
                        return !(obj instanceof Bomb);
                    }); 

        /* destroy sprites in witin range */
        for(i = 0; i < intersections.length; ++i) {
            intersections[i].destroy();
        }

        console.log('I Zimbra!');
    };

    return Bomb;
});

// vim: ts=4 sw=4 sts=4 et:
