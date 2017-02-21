'use strict';

function Content(source) {
  this.path = 'img/' + source;
  this.name = source.substr(0, source.length - 4);
  this.shown = 0;
  this.clicked = 0;
}
var objectImages = [];
var images = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'];

for (var i = 0; i < images.length; i++) {
  var newObject = new Content(images[i]);
  objectImages.push(newObject);
}
console.log(objectImages);

var itemClicked = [];
var itemShown = [];

var first = document.getElementById('image_one');
var second = document.getElementById('image_two');
var third = document.getElementById('image_three');

function generateNum() {
  return Math.floor(Math.random() * objectImages.length);
}

function generateFirstNum() {
  var imageNumOne = generateNum();
  console.log(imageNumOne);
  first.src = objectImages[imageNumOne].path;
  itemShown.unshift(objectImages[imageNumOne].path);
  var imageNumTwo = generateNum();
  while(imageNumOne === imageNumTwo) {
    imageNumTwo = generateNum();
  }
  second.src = objectImages[imageNumTwo].path;
  itemShown.unshift(objectImages[imageNumTwo].path);
  var imageNumThree = generateNum();
  while (imageNumThree === imageNumOne || imageNumThree === imageNumTwo) {
    imageNumThree = generateNum();
  }
  third.src = objectImages[imageNumThree].path;
  itemShown.unshift(objectImages[imageNumThree].path);
}
generateFirstNum();

function generateFollowing() {
  var imageNumOne = generateNum();
  console.log(imageNumOne);
  while(objectImages[imageNumOne].path === itemShown[0] || objectImages[imageNumOne].path === itemShown[1] || objectImages[imageNumOne].path === itemShown[2]){
    imageNumOne = generateNum();
  }
  first.src = objectImages[imageNumOne].path;
  itemShown.unshift(objectImages[imageNumOne].path);
  var imageNumTwo = generateNum();
  while(imageNumOne === imageNumTwo || objectImages[imageNumTwo].path === itemShown[0] || objectImages[imageNumTwo].path === itemShown[1] || objectImages[imageNumTwo].path === itemShown[2]) {
    imageNumTwo = generateNum();
  }
  second.src = objectImages[imageNumTwo].path;
  itemShown.unshift(objectImages[imageNumTwo].path);
  var imageNumThree = generateNum();
  while (imageNumThree === imageNumOne || imageNumThree === imageNumTwo || objectImages[imageNumThree].path === itemShown[0] || objectImages[imageNumThree].path === itemShown[1] || objectImages[imageNumThree].path === itemShown[2]) {
    imageNumThree = generateNum();
  }
  third.src = objectImages[imageNumThree].path;
  itemShown.unshift(objectImages[imageNumThree].path);
}


var clickArea = document.getElementById('photos');
clickArea.addEventListener('click', clickHandler);


function clickHandler(event) {
  console.log(event.target.getAttribute('src'));
  itemClicked.push(event.target.getAttribute('src'));
  if (itemClicked.length <= 25) {
    generateFollowing();
  } else {
    alert('test complete'); /*WHAT HAPPENS AFTER TEST*/
    for (var i = 0; i < itemShown.length; i++) {
      for (var j = 0; j < objectImages.length; j++) {
        if (itemShown[i] === objectImages[j].path) {
          objectImages[j].shown += 1;
        }
      }
    }
    for (var k = 0; k < itemClicked.length; k++) {
      for (var l = 0; l < objectImages.length; l++) {
        if (itemClicked[k] === objectImages[l].path) {
          objectImages[l].clicked += 1;
        }
      }
    }
  }
}

