define(['geometry', './Sprite', './Block'], function(geometry, Sprite, Block) {
    function Bomb(x, y) {
        var that = this;

        Sprite.call(this, {
            width: 32,
            height: 32,
            x: x,
            y: y,
            image: 'bomb.png'
        });
    
        /* bomb blows up after 3 seconds */
        setTimeout(function() {
            Bomb.prototype.explode.call(that);
        }, 3000);
    }

    function Explosion(x, y, img) {
        var that = this;

        Sprite.call(this, {
            width: 128,
            height: 32,
            x: x,
            y: y,
            image: img
        });
    
        /* Explosion lasts half a second */
        setTimeout(function() {
            that.destroy();
            that.world.render();
        }, 500);
    }


    Bomb.prototype = Object.create(Sprite.prototype);
    Explosion.prototype = Object.create(Sprite.prototype);


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
                this.world.spritesWithin(
                    new geometry.Box([x - w, y - h], [3 * w, 3 * h]),
                    function(obj) {
                        return !(obj instanceof Bomb);
                    });
    
        //var img = 'fire' + this.rotation() + '.png';
        var img = 'fire1.png'
        this.world.addSprite(new Explosion(this.params.x, this.params.y, img));
        this.world.render();

        /* destroy sprites in witin range */
        for(i = 0; i < intersections.length; ++i) {
            intersections[i].destroy();
        }

        this.destroy();
        this.world.render();
        console.log('I Zimbra!');
    };

    Bomb.prototype.rotation = function() {
        /*
        var left = new geometry.Box([x-this.params.width, y], 
                    [this.params.width, this.params.height]);
        var right = new geometry.Box([x+this.params.width, y], 
                    [this.params.width, this.params.height]);
        var up = new geometry.Box([x, y+this.params.height], 
                    [this.params.width, this.params.height]);
        var down = new geometry.Box([x, y-this.params.height], 
                    [this.params.width, this.params.height]);*/
        var rotation = 1;

        /*Something like this at least...*/
        if(this.world.wallsWithin(new geometry.Box([x-this.params.width, y],
                    [this.params.width, this.params.height])).length > 0 )
            rotation = 2;
        if(this.world.wallsWithin(new geometry.Box([x+this.params.width, y], 
                    [this.params.width, this.params.height])).length > 0 )
            rotation = 3;
        if(this.world.wallsWithin(new geometry.Box([x, y+this.params.height], 
                    [this.params.width, this.params.height])).length > 0 )
            rotation = 4;
        if(this.world.wallsWithin(new geometry.Box([x, y-this.params.height], 
                    [this.params.width, this.params.height])).length > 0 )
            rotation = 1; 
        return rotation;
    };

    return Bomb;
});

// vim: ts=4 sw=4 sts=4 et:
