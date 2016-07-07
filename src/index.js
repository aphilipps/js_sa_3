// change require to es6 import style
import $ from 'jquery';
import './style.scss';

// const $ = require('jquery');

// $('#main').html("Page updated");

let num = 0;


// setInterval(function addOne() {
//   $('#main').html(`You've been on this page for ${num} seconds.`);
//   num += 1;
// }, 1000);


function addAgain() {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds.`);
}

setInterval(addAgain, 1000);
