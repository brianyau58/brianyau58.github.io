// Elements
var badge = document.querySelector('.badge');
var caption = document.querySelector('figcaption');
var details = document.querySelector('.details');
var detailsContent = document.querySelector('.details__content');

var lowResImage = document.querySelector('.img');
var highResImage = document.createElement('img');

var front = document.querySelector('.front');
var back = document.querySelector('.back');
var showFrontBtn = document.querySelector('#show-front');
var showBackBtn = document.querySelector('#show-back');

// Figcaption Hover Preview
caption.addEventListener('mouseover', function () {
  var contentHeight = detailsContent.offsetHeight;
  details.style.height = contentHeight + 10 + 'px';
  badge.innerHTML = '<i class="fas fa-minus-square"></i>';
});

caption.addEventListener('mouseout', function () {
  details.style.height = 0;
  badge.innerHTML = '<i class="fas fa-plus-square"></i>';
});

// Lazy Load Figure Image

// Card Flipping
showBackBtn.addEventListener('click', function () {
  back.style.transform = "perspective( 2000px ) rotateY( 0deg )";
  front.style.transform = "perspective( 2000px ) rotateY( -180deg )";
});

showFrontBtn.addEventListener('click', function () {
  front.style.transform = "perspective( 2000px ) rotateY( 0deg )";
  back.style.transform = "perspective( 2000px ) rotateY( 180deg )";
});


function myFunction() {
    alert("Hello! I am an alert box!");
  }

