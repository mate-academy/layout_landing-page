'use strict';

const buttonGoTop = document.getElementById("buttonGoTop");

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    buttonGoTop.style.display = "block";
  } else {
    buttonGoTop.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
