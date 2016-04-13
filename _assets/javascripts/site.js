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
  }
];

// Setup
var sprites = document.createElement('div');
sprites.id = 'sprites';
document.querySelector('body').appendChild(sprites);

// Setup Scene
var set = scene[0];
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
