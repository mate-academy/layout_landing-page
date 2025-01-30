document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu_icon");
  const closeMenu = document.getElementById("closeMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  // Открытие меню
  menuIcon.addEventListener("click", () => {
    menuOverlay.classList.add("active");
    document.body.classList.add("no-scroll"); // Отключение прокрутки
  });

  // Закрытие меню по кнопке "крестик"
  closeMenu.addEventListener("click", closeOverlay);

  // Закрытие меню при клике вне области меню
  document.addEventListener("click", (event) => {
    if (
      menuOverlay.classList.contains("active") &&
      !menuOverlay.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      closeOverlay();
    }
  });

  // Закрытие меню при клике на ссылку
  const menuLinks = document.querySelectorAll(".menu-overlay a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeOverlay);
  });

  // Функция для закрытия меню
  function closeOverlay() {
    menuOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll"); // Включение прокрутки
  }
});

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});
