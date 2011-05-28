define(function (require) {
    var $ = require('jquery');
    var Map = require('map');
	
    var map = Map.load();
    $('#game').html(map.createHTML());
    console.log('wooot');
});

