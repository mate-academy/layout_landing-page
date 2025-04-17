"use strict";

// #region PopUp
var popUPcloseBtn = document.querySelector('.pop-up__close-btn');
var popUp = document.querySelector('.pop-up__menu');
var headerBurgerBtn = document.querySelector('.btn-burger');
var header = document.querySelector('.header');

headerBurgerBtn.onclick = function () {
  popUp.classList.toggle('close');
  headerBurgerBtn.classList.toggle('close');
  header.classList.toggle('close');
};

popUPcloseBtn.onclick = function () {
  popUp.classList.toggle('close');
  header.classList.toggle('close');
  headerBurgerBtn.classList.toggle('close');
};
// #endregion

// #region Slide

var observer = new IntersectionObserver(function (entries, obs) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target); // прибирає спостереження після появи
    }
  });
}, {
  threshold: 0.1
});
document.querySelectorAll('.animation--slide-left').forEach(function (el) {
  return observer.observe(el);
});
document.querySelectorAll('.animation--slide-right').forEach(function (el) {
  return observer.observe(el);
});
// #endregion

// #region FOG

document.querySelectorAll('.animation--fog').forEach(function (el) {
  return observer.observe(el);
});
 // #endregion
