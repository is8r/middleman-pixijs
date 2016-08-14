//----------------------------------------------------------------------
// SpuitPixi

// Renderer生成
// var pixi = new SpuitPixi();
// pixi.setTick(update);

var SpuitPixi = function(id) {

  // private
  var private = {
    id: id,
    renderer: createFullScreenRenderer(id),
    stage: createStage(),
    tick: null
  }

  // create Renderer
  function createFullScreenRenderer(id){
    var option = {
      resolution: 2,
      autoResize: true
    }
    if(id != undefined) {
      option.view = document.getElementById(id);
    }
    var renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight, option);
    document.body.appendChild(renderer.view);
    window.onresize = function() {
      renderer.resize(window.innerWidth, window.innerHeight);
    };
    return renderer;
  }

  // create Stage
  function createStage(){
    var stage = new PIXI.Container();
    stage.interactive = true;
    return stage;
  }

  // update
  function update(){
    requestAnimationFrame(update);
    if(private['tick']) private['tick'].call();
    private['renderer'].render(private['stage']);
  }
  update();

  //----------------------------------------------------------------------
  // public API
  return {
    setTick: function(func) {
      private['tick'] = func;
    },
    addChild: function(el) {
      return private['stage'].addChild(el);
    },
    get: function( prop ) {
      if ( private.hasOwnProperty( prop ) ) {
        return private[ prop ];
      }
    }
  }
};
