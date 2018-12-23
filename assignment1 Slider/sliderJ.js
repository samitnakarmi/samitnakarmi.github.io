var sliderImages = document.getElementById('box');

var image = ['image1', 'image2', 'image3', 'image4', 'image5'];

var i = image.length;

var but = document.getElementById('next');

but.addEventListener('click', function() {
  if (i < image.length) {
    i = i + 1;
  } else {
    i = 1;
  }
  sliderImages.innerHTML = '<img src=' + image[i - 1] + '.jpg>';
});

var but2 = document.getElementById('prew');

but2.addEventListener('click', function() {
  if (i < image.length + 1 && i > 1) {
    i = i - 1;
  } else {
    i = image.length;
  }
  sliderImages.innerHTML = '<img src=' + image[i - 1] + '.jpg>';
});

//----------------------slideShowPart---------------

var j = 0;

function changeImg() {
  if (i < image.length) {
    i = i + 1;
  } else {
    i = 1;
  }
  sliderImages.innerHTML = '<img src=' + image[i - 1] + '.jpg>';
  setTimeout('changeImg()', 2000);
}

changeImg();
