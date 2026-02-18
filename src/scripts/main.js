const aside = document.querySelector('.bike-top__aside');

document.querySelector('.bike-top__action-menu').addEventListener('click', () => {
    aside.style.transform = 'translateX(0)';
    document.body.classList.add('no-scroll');
});

document.querySelector('.bike-top__action-menu--close').addEventListener('click', () => {
    aside.style.transform = 'translateX(150%)';
    document.body.classList.remove('no-scroll'); 
});

document.querySelectorAll('.bike-top__nav-link').forEach(item => {
    item.addEventListener('click', () => {
        aside.style.transform = 'translateX(150%)';
        document.body.classList.remove('no-scroll');
    });
});