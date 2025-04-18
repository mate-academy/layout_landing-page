'use strict';

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
    })
  })
}

eachOpen(menuOpeners)
eachOpen(navItems)
