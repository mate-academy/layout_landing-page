'use strict';
const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');
// const themeName = document.querySelector('.theme-name');

switcher.addEventListener('click', () => {
    if (page.classList.contains('page--theme--dark')) {
        (page.classList.remove('page--theme--dark'));
        switcher.classList.remove('theme-switcher--theme--dark');
    } else {
        page.classList.add('page--theme--dark');  
    page.classList.add('theme-switcher--theme--dark');    
    }
});