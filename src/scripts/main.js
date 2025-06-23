const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeNav = document.getElementById('close');

let isOpen = false;

hamburger.onclick = function () {
  if (isOpen) {
    sidebar.style.left = '-100%';
  } else {
    sidebar.style.left = '0';
    document.body.style.overflow = 'hidden';
  }
  isOpen = !isOpen;
};

let isClosed = false;

closeNav.onclick = function () {
  if (isClosed) {
    sidebar.style.left = '0';
  } else {
    sidebar.style.left = '-100%';
    document.body.style.overflow = 'auto';
  }
  isClosed = !isClosed;
};
