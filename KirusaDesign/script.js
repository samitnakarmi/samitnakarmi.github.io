let slider = new Slider(1108, 256);

// let slider = new Slider(1000, 500);

function Slider(width, height) {
  var that = this;
  this.width = width;
  this.height = height;
  var index = 0;
  this.roundedButtonList = [];

  //main container div is slider and images is the div containing all the images
  var slider = document.getElementById('slider');
  var images = document.getElementById('images');
  // all the images inside the images div is kept in an array called imagesList
  var imagesList = slider.getElementsByTagName('img');

  //function to create buttons
  this.createButton = function (text, isNext) {
    var btn = document.createElement('button');

    btn.style.position = 'absolute';
    btn.style.width = '35px';
    btn.style.height = '35px';
    btn.style.fontSize = '1px';
    // btn.style.paddingBottom = '20px';
    btn.style.background = '#fff';
    btn.style.border = 'none';
    btn.style.boxShadow = '2px 2px 5px 2px rgba(0, 0, 0, 0.3)';
    btn.style.top = '40%';
    // btn.style.width = '20px';
    btn.style.color = 'red';
    // btn.style.width = parseInt(btn.style.height) * 3 + 'px';
    btn.style.borderRadius = '50%';
    // btn.style.color = 'gray';
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

  this.getImageByIndex = function (ind) {
    that.stopTransition(initSlide);
    images.style.left = -that.width * ind + 'px';
    index = ind;

    // that.init();
  };

  // function to slide to next image
  this.slideNext = function () {
    that.stopTransition(initSlide);
    index++;
    that.disableButtons();
    if (index > imagesList.length - 1) {
      index = 0;
    }

    var mover = -that.width * (index - 1);

    var moveImage = setInterval(function () {
      images.style.left = mover + 'px';
      mover--;
      if (mover == -that.width * index) {
        that.stopTransition(moveImage);
        that.init();
      }
    }, 1);
  };

  //function to slide to previous slide
  this.slidePrev = function () {
    that.stopTransition(initSlide);
    index--;
    that.disableButtons();

    if (index < 0) {
      index = imagesList.length - 1;
    }

    var mover = -that.width * (index + 1);

    var moveImage = setInterval(function () {
      images.style.left = mover + 'px';
      mover++;

      if (mover == -that.width * index) {
        that.stopTransition(moveImage);
        that.init();
      }
    }, 1);
  };

  //function to auto slide to next slide
  this.autoSlide = function () {
    index++;
    that.disableButtons();
    if (index > imagesList.length - 1) {
      index = 0;
    }

    var mover = -that.width * (index - 1);

    var slide = setInterval(function () {
      images.style.left = mover + 'px';
      mover--;
      if (mover == -that.width * index) {
        that.stopTransition(slide);
      }
    }, 1);
  };

  this.stopTransition = function (intervalFunction) {
    clearInterval(intervalFunction);
    that.enableButtons();
  };

  // function to disable buttons
  this.disableButtons = function () {
    nextBtn.setAttribute('disabled', 'true');
    prevBtn.setAttribute('disabled', 'true');

    // for (var b = 0; b < that.roundedButtonList.length; b++) {
    //     that.roundedButtonList[b].setAttribute('disabled', 'true');
    // }
  };

  this.enableButtons = function () {
    nextBtn.removeAttribute('disabled');
    prevBtn.removeAttribute('disabled');

    // for (var b = 0; b < that.roundedButtonList.length; b++) {
    //     that.roundedButtonList[b].removeAttribute('disabled');
    // }
  };

  this.init = function () {
    initSlide = setInterval(this.autoSlide, 8000);
  };

  // styling for slider
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
  // this.createRoundedButtons();

  //event handling for button clicked for next and previous slides
  nextBtn.addEventListener('click', this.slideNext);
  prevBtn.addEventListener('click', this.slidePrev);

  //initializing auto slide at the beginning
  var initSlide = setInterval(this.autoSlide, 8000);
}
