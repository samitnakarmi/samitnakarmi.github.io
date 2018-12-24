let slider = new Slider(1108, 256);

function Slider(width, height) {
  var that = this;
  this.width = width;
  this.height = height;
  var index = 0;
  this.roundedButtonList = [];

  var slider = document.getElementById('slider');
  var images = document.getElementById('images');

  var imagesList = slider.getElementsByTagName('img');

  this.createButton = function(text, isNext) {
    var btn = document.createElement('button');

    btn.style.position = 'absolute';
    btn.style.width = '35px';
    btn.style.height = '35px';
    btn.style.fontSize = '1px';

    btn.style.background = '#fff';
    btn.style.border = 'none';
    btn.style.boxShadow = '2px 2px 5px 2px rgba(0, 0, 0, 0.3)';
    btn.style.top = '40%';

    btn.style.color = 'red';

    btn.style.borderRadius = '50%';

    btn.style.fontSize = '20px';
    btn.style.fontWeight = 'bold';
    btn.innerText = text;

    if (isNext) {
      btn.style.right = '1%';
    } else {
      btn.style.left = '1%';
    }

    slider.appendChild(btn);
    return btn;
  };

  // this.createRoundedButtons = function () {

  //     for (var i = 0; i < imagesList.length; i++) {
  //         var leftIndex = 40 + (5 * i);
  //         var roundBtn = document.createElement('div');
  //         roundBtn.style.width = '20px';
  //         roundBtn.style.height = '20px';
  //         roundBtn.style.background = 'gray';
  //         roundBtn.style.position = 'absolute';
  //         roundBtn.style.top = '90%';
  //         roundBtn.style.left = leftIndex + '%';
  //         roundBtn.style.borderRadius = '50%';
  //         roundBtn.innerHTML = i;
  //         roundBtn.style.paddingLeft = '10px';

  //         roundBtn.addEventListener('click', function (evt) {

  //             that.getImageByIndex(this.innerHTML);

  //         });

  //         slider.appendChild(roundBtn);
  //         that.roundedButtonList.push(roundBtn);
  //     }

  // }

  this.getImageByIndex = function(ind) {
    that.stopTransition(initSlide);
    images.style.left = -that.width * ind + 'px';
    index = ind;
  };

  this.slideNext = function() {
    that.stopTransition(initSlide);
    index++;
    that.disableButtons();
    if (index > imagesList.length - 1) {
      index = 0;
    }

    var mover = -that.width * (index - 1);

    var moveImage = setInterval(function() {
      images.style.left = mover + 'px';
      mover--;
      if (mover == -that.width * index) {
        that.stopTransition(moveImage);
        that.init();
      }
    }, 1);
  };

  this.slidePrev = function() {
    that.stopTransition(initSlide);
    index--;
    that.disableButtons();

    if (index < 0) {
      index = imagesList.length - 1;
    }

    var mover = -that.width * (index + 1);

    var moveImage = setInterval(function() {
      images.style.left = mover + 'px';
      mover++;

      if (mover == -that.width * index) {
        that.stopTransition(moveImage);
        that.init();
      }
    }, 1);
  };

  this.autoSlide = function() {
    index++;
    that.disableButtons();
    if (index > imagesList.length - 1) {
      index = 0;
    }

    var mover = -that.width * (index - 1);

    var slide = setInterval(function() {
      images.style.left = mover + 'px';
      mover--;
      if (mover == -that.width * index) {
        that.stopTransition(slide);
      }
    }, 1);
  };

  this.stopTransition = function(intervalFunction) {
    clearInterval(intervalFunction);
    that.enableButtons();
  };

  this.disableButtons = function() {
    nextBtn.setAttribute('disabled', 'true');
    prevBtn.setAttribute('disabled', 'true');
  };

  this.enableButtons = function() {
    nextBtn.removeAttribute('disabled');
    prevBtn.removeAttribute('disabled');
  };

  this.init = function() {
    initSlide = setInterval(this.autoSlide, 8000);
  };

  slider.style.width = that.width + 'px';
  slider.style.height = that.height + 'px';
  slider.style.position = 'relative';
  slider.style.overflow = 'hidden';

  for (var i = 0; i < imagesList.length; i++) {
    imagesList[i].style.width = that.width + 'px';
    imagesList[i].style.height = that.height + 'px';
    imagesList[i].style.display = 'inline-block';
  }

  images.style.width = this.width * imagesList.length + 'px';
  images.style.display = 'flex';
  images.style.position = 'absolute';

  var prevBtn = this.createButton('<', false);
  var nextBtn = this.createButton('>', true);

  nextBtn.addEventListener('click', this.slideNext);
  prevBtn.addEventListener('click', this.slidePrev);

  var initSlide = setInterval(this.autoSlide, 20000);
}
