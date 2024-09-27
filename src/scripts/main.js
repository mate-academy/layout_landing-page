'use strict';
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 500) {
    document.getElementById('back-to-top').style.display = 'block';
    } else {
    document.getElementById('back-to-top').style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
});