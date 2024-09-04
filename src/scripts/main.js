// #region sections appearance effect

const sections = document.querySelectorAll('.hidden');
let initialScroll = true;

const toggleSectionVisibility = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 20 && sectionBottom > 20) {
      section.classList.add('visible');
    } else if (!section.classList.contains('top-bar')) {
      section.classList.remove('visible');
    }
  });
};

const handleScroll = () => {
  if (initialScroll) {
    window.scrollTo(0, 0);
    initialScroll = false;
  }
  if (menu.style.display !== 'block') {
    toggleSectionVisibility();
  }
};

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

// #endregion
