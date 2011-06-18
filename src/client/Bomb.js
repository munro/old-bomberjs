define(['geometry', './Sprite', './Block'], function (geometry, Sprite, Block) {
    function Bomb(params) {
        var that = this;
        this.params = params;
        this.timer = setTimeout(function () {
            that.destroy();
        }, params.delay);
    }
    
    Bomb.prototype = Object.create(Sprite.prototype);

    Bomb.prototype.destroy = function () {
        Sprite.prototype.destroy.call(this);
        
        // Destroy stuff around bomb with destroyer set as this.params.player,
        // and display the fire effect.  Use this.params.size for the bomb spread
    };

    return Bomb;
});

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
