'use strict';

const page = document.querySelector('.page')
const main = document.querySelector('.menu')
const iconCloseMenu = document.querySelector('.icon--close')
const iconOpenMenu = document.querySelector('.icon--menu')
const navItems = document.querySelectorAll('.nav__item')
const navLinks = document.querySelectorAll('.nav__link')
const iconCloseMenuAside = document.querySelector('.icon--close-aside')
const topBarLogo = document.querySelector('.top-bar__logo--aside')
const phoneNumberAside = document.querySelector('.menu__phone-number-aside')
const callToOrderAside = document.querySelector('.menu__call-to-order-aside')

const menuOpeners = [iconOpenMenu, iconCloseMenu, topBarLogo];

function eachOpen(query) {
  query.forEach(item => {
    item.addEventListener('click', () => {
      main.classList.toggle('menu--active')
      page.classList.toggle('page--no-scroll')
    })
  })
}

document.addEventListener('keydown', function(event) {
  if (main.classList.contains('menu--active')) {
    navLinks.forEach(item => {
      item.tabIndex = 0
    })
    topBarLogo.tabIndex = 0
    iconCloseMenuAside.tabIndex = 0
    phoneNumberAside.tabIndex = 0
    callToOrderAside.tabIndex = 0

    if (event.key === 'Tab' && event.target.classList[0] === 'menu__call-to-order') {
      topBarLogo.focus()
    }
  } else {
    navLinks.forEach(item => {
      item.tabIndex = -1
    })
    topBarLogo.tabIndex = -1
    iconCloseMenuAside.tabIndex = -1
    phoneNumberAside.tabIndex = -1
    callToOrderAside.tabIndex = -1
  }
});

eachOpen(menuOpeners)
eachOpen(navItems)
