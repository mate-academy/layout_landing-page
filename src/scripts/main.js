'use strict';

const page = document.querySelector('.page__body')
const main = document.querySelector('.menu')
const iconCloseMenu = document.querySelector('.icon--close')
const iconOpenMenu = document.querySelector('.icon--menu')
const navItems = document.querySelectorAll('.nav__item')
const topBarLogo = document.querySelector('.top-bar__logo--aside')

const menuOpeners = [iconOpenMenu, iconCloseMenu, topBarLogo];

function eachOpen(query) {
  query.forEach(item => {
    item.addEventListener('click', () => {
      main.classList.toggle('menu--active')
      page.classList.toggle('page--no-scroll')
    })
  })
}

eachOpen(menuOpeners)
eachOpen(navItems)
