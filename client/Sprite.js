define(
    ['./Map'],
    function (map) {
    function Sprite(params) {
        this.params = params;
        if (typeof this.params.width === 'undefined') {
            this.params.width = Map.TILE_WIDTH;
        }
        if (typeof this.params.height === 'undefined') {
            this.params.height = Map.TILE_HEIGHT;
        }
    }
    
    Sprite.prototype.createHTML = function () {
        return '<div style="width:' + this.params.width + 'px;' +
            'height:' + this.params.height + 'px;' +
            'left:' + this.params.x + 'px;top:' + this.params.y + 'px;' +
            'background-image:url(\'media/sprites/' + this.params.image + '\')"></div>';
    }
    
    return Sprite;
});

