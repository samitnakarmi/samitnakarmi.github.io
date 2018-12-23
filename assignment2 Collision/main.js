var elementArray = [];

var elementWidth = 15;
var boxHeight = 15;
var BoxHeight = 500;
var BoxWidth = 1000;

var randomNum = function(max = 1, min = 0) {
  return Math.floor(Math.random() * max) + min;
};

var elementCollide = function(element, elementIndex) {
  for (var i = 0; i < elementArray.length; i++) {
    var otherBox = elementArray[i];

    let change = randomNum(2);

    if (i !== elementIndex) {
      if (
        element.x < otherBox.x + elementWidth &&
        element.x + elementWidth > otherBox.x &&
        element.y < otherBox.y + boxHeight &&
        boxHeight + element.y > otherBox.y
      ) {
        console.log('hit');
        element.dx = -element.dx + change;
        element.dy = -element.dy + change;

        otherBox.dx = -otherBox.dx + change;
        otherBox.dy = -otherBox.dy + change;
      }
    }
  }
};

var hitCorner = function(box) {
  if (box.x < 0) {
    box.dx = -box.dx;
  } else if (box.x > BoxWidth) {
    box.dx = -box.dx;
    box.x = BoxWidth;
  } else if (box.y < 0) {
    box.dy = -box.dy;
  } else if (box.y > BoxHeight) {
    box.dy = -box.dy;
  }
};

var collisionHappen = function(box, index) {
  hitCorner(box);
  elementCollide(box, index);
};

var changePosition = function(boxRef, box) {
  box.x += box.dx;
  box.y += box.dy;

  boxRef.style.left = box.x + 'px';
  boxRef.style.top = box.y + 'px';
};

var gameLoop = function() {
  var boxDiv = document.getElementsByClassName('box');

  for (var i = 0; i < elementArray.length; i++) {
    changePosition(boxDiv[i], elementArray[i]);

    collisionHappen(elementArray[i], i);
  }
};

var colorGenerate = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[randomNum(16)];
  }
  return color;
};

var drawBox = function(box) {
  var elemntCont = document.createElement('div');
  elemntCont.style.background = colorGenerate();
  elemntCont.style.width = elementWidth + 'px';
  elemntCont.style.height = boxHeight + 'px';
  elemntCont.style.position = 'absolute';
  elemntCont.style.left = box.x + 'px';
  elemntCont.style.top = box.y + 'px';

  elemntCont.setAttribute('class', 'box');
  document.body.appendChild(elemntCont);
};

var elementCreate = function(x, y, dx, dy) {
  elementArray.push({
    x: x,
    y: y,
    dx: dx,
    dy: dy,
  });
};

var createElements = function() {
  for (var i = 0; i < 20; i++) {
    elementCreate(randomNum(BoxWidth), randomNum(BoxHeight), randomNum(10, 3), randomNum(10, 3));

    drawBox(elementArray[i]);
  }
};

createElements();

setInterval(gameLoop, 100);
