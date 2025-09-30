const elementHeader = document.getElementById('hiddenNavbar');
const elementButton = document.getElementById('humberBtn');
const closeBtn = document.getElementById('closeBtn');

elementButton.addEventListener('click', () => {
  if (elementHeader.classList.contains('is-closed')) {
    elementHeader.classList.remove('is-closed');
  }
  elementHeader.classList.add('is-active');
});

closeBtn.addEventListener('click', () => {
  elementHeader.classList.remove('is-active');
  elementHeader.classList.add('is-closed');
});
