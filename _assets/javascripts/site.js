var bgs = [
  'background-ct-12000.png',
  'background-dk.png',
  'background-mario-blue-lumps.png',
  'background-mario-green-hills.png',
  'background-mario-green-mountains.png',
  'background-mario-mountains.png',
  'background-mario-tree-tops.png',
  'background-mario2-w1a2.png',
  'background-som-goblin.png',
  'background-som-neko.png',
  'background-som.png'
];

var scene = [
  // Earthbound / Mother 2
  {
    'sprites': [
      'ness north-west',
      'ness north',
      'ness north-east',
      'ness east',
      'ness south-east',
      'ness south',
      'ness south-west',
      'ness west'
    ],
    'backgrounds': [
      'background-mother2-dalaam.png',
      'background-mother2-onett.png'
    ]
  },
  // Seiken Densetsu 3
  {
    'sprites': [
      'jinn-float'
    ]
  }
];

// Setup
var sprites = document.createElement('div');
sprites.id = 'sprites';
document.querySelector('body').appendChild(sprites);

// Setup Scene
var set = scene[Math.floor(Math.random() * scene.length)];
var scale = function(){
  return Math.floor(Math.random() * 4) + 1;
};
if (set.sprites && set.sprites.length) {
  var sprite = set.sprites[Math.floor(Math.random() * set.sprites.length)]
  var div = document.createElement('div');
  div.className = "sprite " + sprite;
  div.style.transform = 'scale(' + scale() + ')';
  document.querySelector('#sprites').appendChild(div);
}
if (set.backgrounds) {
  var bg = set.backgrounds[Math.floor(Math.random() * set.backgrounds.length)];
  document.querySelector('.site-footer').style.backgroundImage = 'url("https://snes.in/site/bg/' + bg + '")';
}
else {
  document.querySelector('.site-footer').style.backgroundImage = 'url("https://snes.in/site/bg/' + bgs[Math.floor(Math.random() * bgs.length)] + '")';
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
