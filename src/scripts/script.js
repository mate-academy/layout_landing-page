document.addEventListener('DOMContentLoaded', function () {
  const phoneIcon = document.querySelector('.icon--phone');
  const topBarList = document.querySelector('.top-bar__list');

  phoneIcon.addEventListener('click', function (event) {
    console.log(window.screen.width);
    if (window.screen.width >= 1024) {
      event.preventDefault();
      topBarList.classList.toggle('visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const phoneIcon = document.querySelector('.icon--phone');

  phoneIcon.addEventListener('click', function (event) {
    if (window.screen.width < 1024) {
      event.preventDefault();
      phoneIcon.setAttribute('href', 'tel:+1 212-535-7710');
    }
  });
});
