const elements = () => ({
  phoneIcon: document.querySelector('.nav__icon--phone'),
  phoneList: document.querySelector('.phone__items'),
});

const setPhoneListVisibility = (isOpen) => {
  const { phoneList } = elements();

  if (isOpen) {
    phoneList.classList.remove('hidden');
  } else {
    phoneList.classList.add('hidden');
  }
};

const setupPhoneHoverEvents = () => {
  const { phoneIcon } = elements();

  phoneIcon.addEventListener('mouseenter', () => setPhoneListVisibility(true));
  phoneIcon.addEventListener('mouseleave', () => setPhoneListVisibility(false));
};

export const shownPhones = () => {
  setupPhoneHoverEvents();
};
