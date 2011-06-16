define(['./Sprite'], function(Sprite) {
  function Block() {
    Sprite.call(this, {
      width: 32,
      height: 32,
      x: 32 * (1 + Math.floor(13 * Math.random())),
      y: 32 * (1 + 2 * Math.floor(6 * Math.random())),
      image: 'block.png'
    });
  }

  Block.prototype = Object.create(Sprite.prototype);

  return Block;
});
