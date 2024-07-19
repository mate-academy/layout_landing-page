'use strict';

const buttonGoTop = document.getElementById("buttonGoTop");

window.addEventListener("scroll", () => scrollFunction());

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    buttonGoTop.style.display = "block";
  } else {
    buttonGoTop.style.display = "none";
  }
}

buttonGoTop.addEventListener("click", () => topFunction());

function topFunction() {
  document.documentElement.scrollTop = 0;
}
