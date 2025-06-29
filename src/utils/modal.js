const Modal = () => {
  const openBtn = document.querySelector('#open-modal');
  const dialog = document.querySelector('#dialog');
  const closeBtn = document.querySelector('#close-modal');

  let isModalOpen = false;

  openBtn.addEventListener('click', () => {
    isModalOpen = !isModalOpen;
    document.body.style.overflowY = isModalOpen ? 'hidden' : 'auto';
    dialog.showModal();
  });

  closeBtn.addEventListener('click', () => {
    isModalOpen = !isModalOpen;
    document.body.style.overflowY = isModalOpen ? 'hidden' : 'auto';
    dialog.close();
  });
};

export default Modal;
