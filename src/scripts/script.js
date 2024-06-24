document.addEventListener('DOMContentLoaded', function () {
  const phoneIcon = document.querySelector('.icon--phone');
  const topBarList = document.querySelector('.top-bar__list');
  console.log(phoneIcon);
  phoneIcon.addEventListener('click', function (event) {
    console.log(topBarList);
    event.preventDefault();

    topBarList.classList.toggle('visible');
  });
});
