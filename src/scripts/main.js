'use strict';

const burger = document.querySelector('.header__burger');

const burgerPath = document.getElementById('burger-path');

const oldPath =
  // eslint-disable-next-line max-len
  'M4 22.6667C4 23.403 4.59695 24 5.33333 24H26.6667C27.403 24 28 23.403 28 22.6667C28 21.9303 27.403 21.3333 26.6667 21.3333H5.33333C4.59695 21.3333 4 21.9303 4 22.6667ZM4 16C4 16.7364 4.59695 17.3333 5.33333 17.3333H26.6667C27.403 17.3333 28 16.7364 28 16C28 15.2636 27.403 14.6667 26.6667 14.6667H5.33333C4.59695 14.6667 4 15.2636 4 16ZM5.33333 8C4.59695 8 4 8.59695 4 9.33333C4 10.0697 4.59695 10.6667 5.33333 10.6667H26.6667C27.403 10.6667 28 10.0697 28 9.33333C28 8.59695 27.403 8 26.6667 8H5.33333Z';

const newPath =
  // eslint-disable-next-line max-len
  'M3 17C3 17.5523 3.44772 18 4 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H4C3.44772 16 3 16.4477 3 17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12ZM4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H4Z';

burger.addEventListener('mouseenter', (event) => {
  burgerPath.setAttribute('d', newPath);
  burger.setAttribute('viewBox', '0 0 24 24');
});

burger.addEventListener('mouseleave', (event) => {
  burgerPath.setAttribute('d', oldPath);
  burger.setAttribute('viewBox', '0 0 32 32');
});

const phoneNumber = document.querySelector('.header__phone-number');
const phoneIcon = document.querySelector('.header__phone');

phoneIcon.addEventListener('mouseenter', (event) => {
  phoneNumber.classList.add('header__phone-active');
  phoneNumber.classList.remove('header__phone-inactive');
});

phoneNumber.addEventListener('mouseenter', (event) => {
  phoneNumber.classList.add('header__phone-active');
  phoneNumber.classList.remove('header__phone-inactive');
});

phoneIcon.addEventListener('mouseleave', (event) => {
  phoneNumber.classList.remove('header__phone-active');
  phoneNumber.classList.add('header__phone-inactive');
});

phoneNumber.addEventListener('mouseleave', (event) => {
  phoneNumber.classList.remove('header__phone-active');
  phoneNumber.classList.add('header__phone-inactive');
});

const menuClose = document.querySelector('.menu__close');

const menu = document.querySelector('.menu');

const menuOpen = document.querySelector('.header__burger');

menuOpen.addEventListener('click', (event) => {
  menu.classList.add('menu__active');
});

menuClose.addEventListener('click', (event) => {
  menu.classList.remove('menu__active');
});

const menuRecommend = document.querySelector('.menu__recommend');
const Recommend = document.querySelector('.recommended');

menuRecommend.addEventListener('click', (event) => {
  menu.classList.remove('menu__active');
  Recommend.scrollIntoView({ behavior: 'smooth' });
});

const menuCategories = document.querySelector('.menu__categories');
const categories = document.querySelector('.audio__title');

menuCategories.addEventListener('click', (event) => {
  menu.classList.remove('menu__active');
  categories.scrollIntoView({ behavior: 'smooth' });
});

const menuAbout = document.querySelector('.menu__about');
const about = document.querySelector('.banner__container');

menuAbout.addEventListener('click', (event) => {
  menu.classList.remove('menu__active');
  about.scrollIntoView({ behavior: 'smooth' });
});

const menuContact = document.querySelector('.menu__contact');
const contact = document.querySelector('.contact__title');

menuContact.addEventListener('click', (event) => {
  menu.classList.remove('menu__active');
  contact.scrollIntoView({ behavior: 'smooth' });
});
