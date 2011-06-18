define(['./Sprite', './Block'], function(Sprite, Block) {
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
        console.log('I Zimbra!');
    };

    return Bomb;
});

// vim: ts=4 sw=4 sts=4 et:
