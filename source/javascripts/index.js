window.addEventListener('load', function(){

  //setup
  var pixi = new SpuitPixi();
  pixi.setTick(update);
  init();

  //init
  var bunny = null;
  function init() {
    PIXI.loader.add('bunny', 'images/bunny.png').load(function (loader, resources) {
      bunny = new PIXI.Sprite(resources.bunny.texture);
      bunny.position.x = window.innerWidth/2;
      bunny.position.y = window.innerHeight/2;
      bunny.scale.x = 3;
      bunny.scale.y = 3;
      bunny.anchor.x = 0.5;
      bunny.anchor.y = 0.5;
      pixi.addChild(bunny);
    });
  }

  //update
  function update() {
    if(bunny) {
      bunny.rotation += 0.01;
    }
  }

});