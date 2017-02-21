'use strict';

var images = [
  'img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast.jpg',
  'img/bubblegum.jpg',
  'img/chair.jpg',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/pen.jpg',
  'img/pet-sweep.jpg',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/sweep.png',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/water-can.jpg',
  'img/wine-glass.jpg'];

var itemClicked = [];

var first = document.getElementById('image_one');
var second = document.getElementById('image_two');
var third = document.getElementById('image_three');

function generateNum() {
  var imageNumOne = Math.floor(Math.random() * images.length);
  console.log(imageNumOne);
  first.src = images[imageNumOne];
  var imageNumTwo = Math.floor(Math.random() * images.length);
  while(imageNumOne === imageNumTwo) {
    imageNumTwo = Math.floor(Math.random() * images.length);
  }
  second.src = images[imageNumTwo];
  var imageNumThree = Math.floor(Math.random() * images.length);
  while (imageNumThree === imageNumOne || imageNumThree === imageNumTwo) {
    imageNumThree = Math.floor(Math.random() * images.length);
  }
  third.src = images[imageNumThree];
}
generateNum();

var clickArea = document.getElementById('photos');
clickArea.addEventListener('click', clickHandler);

var repeats = [];

function clickHandler(event) {
  console.log(event.target.getAttribute('src'));
  itemClicked.push(event.target.getAttribute('src'));
  if (itemClicked.length <= 25) {
    generateNum();
  } else {
    alert('test complete'); /*WHAT HAPPENS AFTER TEST*/
    for(var i = 0; i < itemClicked.length; i++) {
      for(var j = i + 1; j < itemClicked.length; j++) {
        if(itemClicked[i] === itemClicked[j]) {
          console.log(itemClicked[i]);
          repeats.push(itemClicked[i]);
        }
      }
    }
  }
}
// var count = 0;

// for (var i = 0; i < repeats.length; i++) {
//   for (var j = 0; j < repeats.length; j++) {
//     if (repeats[i] === repeats[j]) {
//       count += 1;
//       var multiClick = new Results(String(repeats[j]), count);
//     }
//   }
// }

// function Results(name, times) {
//   this.imageFile = name;
//   this.timesClicked = times; 
// }