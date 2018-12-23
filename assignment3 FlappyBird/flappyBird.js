var canvass = document.getElementById('canvas');
var contxt = canvass.getContext('2d');

// load images

var bird = new Image();
var background = new Image();
var foreground = new Image();
var upPipe = new Image();
var downPipe = new Image();

bird.src = 'images/bird.png';
background.src = 'images/background.png';
foreground.src = 'images/foreground.png';
upPipe.src = 'images/upPipe.png';
downPipe.src = 'images/downPipe.png';

// some variables

var gap = 85;
var cnst;

var bX = 10;
var bY = 150;

var gravity = 2;

var score = 0;

// on key down

document.addEventListener('keydown', moveUp);

function moveUp() {
  bY -= 25;
  fly.play();
}

// pipe coordinates

var pipe = [];

pipe[0] = {
  x: canvass.width,
  y: 0,
};

//draw images

function draw() {
  contxt.drawImage(background, 0, 0);

  for (var i = 0; i < pipe.length; i++) {
    cnst = upPipe.height + gap;
    contxt.drawImage(upPipe, pipe[i].x, pipe[i].y);
    contxt.drawImage(downPipe, pipe[i].x, pipe[i].y + cnst);

    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x: canvass.width,
        y: Math.floor(Math.random() * upPipe.height) - upPipe.height
      });
    }

    //collision

    if (
      (bX + bird.width >= pipe[i].x &&
        bX <= pipe[i].x + upPipe.width &&
        (bY <= pipe[i].y + upPipe.height ||
          bY + bird.height >= pipe[i].y + cnst)) ||
      bY + bird.height >= canvass.height - foreground.height
    ) {
      location.reload(); // reload the page
    }

    if (pipe[i].x == 5) {
      score++;
      scor.play();
    }
  }

  contxt.drawImage(foreground, 0, canvass.height - foreground.height);

  contxt.drawImage(bird, bX, bY);

  bY += gravity;

  contxt.fillStyle = 'blue';  
  contxt.fillText('Score : ' + score, 10, canvass.height - 20);

  requestAnimationFrame(draw);
}

draw();
