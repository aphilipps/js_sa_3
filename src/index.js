// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let num = 0;

function addAgain() {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds.`);
}

setInterval(addAgain, 1000);
