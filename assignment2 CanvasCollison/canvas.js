var cann = document.querySelector('canvas');
cann.width = window.innerWidth;
cann.height = window.innerHeight;

var contxt = cann.getContext('2d');

var ballCount = 100;
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);

  this.draw = function() {
    contxt.beginPath();
    contxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    contxt.strokeStyle = 'blue';
    contxt.stroke();
    contxt.fillStyle = this.color;
    // c.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    contxt.fill();
  };
  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;

    this.draw();
  };

  this.updateCollison = function() {
    console.log('thokyo......');
    this.dx = -this.dx;
    this.dy = -this.dy;
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  };
}

var circleArray = [];

for (var i = 0; i < ballCount; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;

  circleArray.push(new Circle(x, y, dx, dy, radius));
}

// console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  contxt.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();

    for (var u = i + 1; u < circleArray.length; u++) {
      if (
        circleArray[i].x + circleArray[u].x <= 2 * radius ||
        circleArray[i].x + circleArray[u].y <= 2 * radius ||
        circleArray[i].y + circleArray[u].y <= 2 * radius ||
        circleArray[i].y + circleArray[u].x <= 2 * radius
      ) {
        circleArray[i].updateCollison();
        circleArray[u].updateCollison();
      }
    }
  }
}

animate();
