var bgs = [
  'background-dk.png',
  'background-mario2-w1a2.png',
];

var scene = [
  {
    'name': 'Earthbound / Mother 2',
    'sprites': [
      { className: 'ness north-west', 'scale': true },
      { className: 'ness north', 'scale': true },
      { className: 'ness north-east', 'scale': true },
      { className: 'ness east', 'scale': true },
      { className: 'ness south-east', 'scale': true },
      { className: 'ness south', 'scale': true },
      { className: 'ness south-west', 'scale': true },
      { className: 'ness west', 'scale': true },
    ],
    'backgrounds': [
      'background-mother2-dalaam.png',
      'background-mother2-onett.png'
    ]
  },
  {
    'name': 'Seiken Densetsu 2',
    'sprites': [
      { className: 'captain-duck walk east', 'scale': true },
      { className: 'captain-duck walk west', 'scale': true },
      { className: 'captain-duck walk-north', 'scale': true },
      { className: 'captain-duck walk-south', 'scale': true },
      { className: 'kid-goblin walk east', 'scale': true },
      { className: 'kid-goblin walk west', 'scale': true },
      { className: 'kid-goblin walk-north', 'scale': true },
      { className: 'kid-goblin walk-south', 'scale': true },
      { className: 'villager-woman-green walk east', 'scale': true },
      { className: 'villager-woman-green walk west', 'scale': true },
      { className: 'villager-woman-green walk-north', 'scale': true },
      { className: 'villager-woman-green walk-south', 'scale': true },
    ],
    'backgrounds': [
      'background-som-goblin.png',
      'background-som-neko.png',
      'background-som.png'
    ]
  },
  {
    'name': 'Seiken Densetsu 3',
    'sprites': [
      { className: 'jinn-float', 'scale': true },
    ]
  },
  {
    'name': 'Chrono Trigger',
    'sprites': [
      { className: 'akira-toriyama-walk east', 'scale': true },
      { className: 'akira-toriyama-walk west', 'scale': true },
      { className: 'hironobu-sakaguchi-walk east', 'scale': true },
      { className: 'hironobu-sakaguchi-walk west', 'scale': true },
      { className: 'kazuhiko-aoki', 'scale': true },
      { className: 'yuji-horii-walk east', 'scale': true },
      { className: 'yuji-horii-walk west', 'scale': true },
    ],
    'backgrounds': [
      'background-ct-12000.png'
    ]
  },
  {
    'name': 'Super Mario World',
    'sprites': [
      { className: 'flying-question-block east', 'scale': false },
      { className: 'flying-question-block west', 'scale': false },
    ],
    'backgrounds': [
      'background-mario-blue-lumps.png',
      'background-mario-green-hills.png',
      'background-mario-green-mountains.png',
      'background-mario-mountains.png',
      'background-mario-tree-tops.png',
    ]
  }
];

// Setup
var sprites = document.createElement('div');
sprites.id = 'sprites';
document.querySelector('body').appendChild(sprites);

function setupSprite(options){
  options = options || {};

  // Setup Scene
  var set_index = (options.set !== undefined && options.set !== null) ? options.set : Math.floor(Math.random() * scene.length);
  var set = scene[set_index];
  var scale = function(){
    return Math.floor(Math.random() * 4) + 1;
  };

  // Sprites
  if (set && set.sprites && set.sprites.length) {
    var sprite_index = (options.sprite !== undefined && options.sprite !== null) ? options.sprite : Math.floor(Math.random() * set.sprites.length);
    var sprite = set.sprites[sprite_index]
    if (sprite) {
      var div = document.createElement('div');
      div.className = "sprite " + sprite.className;
      sprites.innerHTML = '';
      sprites.appendChild(div);
      if (sprite.scale) {
        setTimeout(function(){
          var new_div = document.querySelector('#sprites .sprite');
          new_div.style.transform = updateTransform(new_div, { "scale": scale() });
        }, 0);
      }
    }
  }

  // Backgrounds
  if (set && set.backgrounds) {
    var bg_index = (options.sprite !== undefined && options.sprite !== null) ? options.sprite : Math.floor(Math.random() * set.backgrounds.length);
    var bg = set.backgrounds[bg_index];
    document.querySelector('.site-footer').style.backgroundImage = 'url("https://snes.in/site/bg/' + bg + '")';
  }
  else {
    document.querySelector('.site-footer').style.backgroundImage = 'url("https://snes.in/site/bg/' + bgs[Math.floor(Math.random() * bgs.length)] + '")';
  }
}
setupSprite();

if (typeof cheet === 'function') {
  cheet('↑ ↑ ↓ ↓ ← → ← → b a', function(){
    setupSprite();
  });
}

function updateTransform(element, options) {
  var style = window.getComputedStyle(element)
  var transform = style.getPropertyValue("-webkit-transform") ||
    style.getPropertyValue("-moz-transform") ||
    style.getPropertyValue("-ms-transform") ||
    style.getPropertyValue("-o-transform") ||
    style.getPropertyValue("transform") ||
    'matrix(1, 0, 0, 1, 0, 0)';

  if (!transform || transform === 'none') {
    transform = 'matrix(1, 0, 0, 1, 0, 0)';
  }

  var values = transform.split('(')[1],
      values = values.split(')')[0],
      values = values.split(',');

  var scaleX = values[0];
  var skewX = values[1];
  var skewY = values[2];
  var scaleY = values[3];
  var translateX = values[4];
  var translateY = values[5];

  // Rotation
  var angle = Math.round(Math.atan2(skewX, Math.abs(scaleX)) * (180 / Math.PI)) || 0;
  angle = (angle < 0) ? angle + 360 : angle;

  if (options.rotate) {
    angle = options.rotate;
  }

  // Scale
  if (options.scale || options.scaleX) {
    scaleX *= options.scale || options.scaleX;
  }
  if (options.scale || options.scaleY) {
    scaleY *= options.scale || options.scaleY;
  }

  var new_transform = "rotate(" + angle + "deg) scaleX(" + scaleX + ") scaleY(" + scaleY + ") skewX(" + skewX + ") skewY(" + skewY + ") translate(" + translateX + ", " + translateY + ")";

  element.style.transform = new_transform;
}

// Image Compare
var comparisons = document.querySelectorAll('.comparison');
for (var i = 0, l = comparisons.length; i < l; ++i) {
  var comparison = comparisons[i];

  var divisor = comparison.querySelector(".divisor");
  divisor.classList.add('inline');
  divisor.style.width = "auto";
  divisor.style.opacity = 1;
  divisor.style['mix-blend-mode'] = 'normal';
  toggleSlider(comparison, true);

  setupSliders(comparison);
  setupTypes(comparison, i);
  setupBlendMode(comparison);
}

function setupSliders(comparison){
  var divisor = comparison.querySelector(".divisor");
  var slider = comparison.querySelector("input.slider");
  slider.addEventListener('input', function(event){
    var type = comparison.querySelector("input.types:checked");
    if (type.value === 'slider') {
      divisor.classList.remove('inline');
      divisor.style.width = event.currentTarget.value + "%";
      divisor.style.opacity = 1;
      toggleSlider(comparison, false);
    }
    else if (type.value === 'onion') {
      divisor.classList.remove('inline');
      divisor.style.width = "100%";
      divisor.style.opacity = event.currentTarget.value / 100;
      toggleSlider(comparison, false);
    }
    else if (type.value === 'inline') {
      divisor.classList.add('inline');
      divisor.style.width = "auto";
      divisor.style.opacity = 1;
      divisor.style['mix-blend-mode'] = 'normal';
      toggleSlider(comparison, true);
    }
  });
}

function toggleSlider(comparison, state){
  comparison.querySelector("input.slider").disabled = state;
  comparison.querySelector("select.blend-mode").disabled = state;
}

function setupTypes(comparison, comparison_index){
  var inputs = comparison.querySelectorAll('input.types');
  var slider = comparison.querySelector("input.slider");
  var divisor = comparison.querySelector(".divisor");
  for (var i = 0, l = inputs.length; i < l; ++i) {
    var input = inputs[i];
    input.name = input.name + '_' + comparison_index;
    input.addEventListener('change', function(event){
      // Trigger Slider
      var new_event = document.createEvent('HTMLEvents');
      new_event.initEvent('input', true, false);
      slider.dispatchEvent(new_event);

      var type = comparison.querySelector("input.types:checked");
      if (type.value === 'slider') {
        divisor.classList.remove('inline');
        divisor.style.width = "50%";
        divisor.style.opacity = 1;
        toggleSlider(comparison, false);
      }
      else if (type.value === 'onion') {
        divisor.classList.remove('inline');
        divisor.style.width = "100%";
        divisor.style.opacity = .5;
        toggleSlider(comparison, false);
      }
      else if (type.value === 'inline') {
        divisor.classList.add('inline');
        divisor.style.width = "auto";
        divisor.style.opacity = 1;
        divisor.style['mix-blend-mode'] = 'normal';
        toggleSlider(comparison, true);
      }
    });
    if (input.classList.contains('type-inline')){
      input.checked = true;
    }
  }
}

function setupBlendMode(comparison){
  var divisor = comparison.querySelector(".divisor");
  var select = comparison.querySelector("select.blend-mode");
  select.addEventListener('input', function(event){
    divisor.style['mix-blend-mode'] = event.currentTarget.value;
  });
}
