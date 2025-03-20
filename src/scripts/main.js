document.querySelector(".form").addEventListener("submit", function (event) {
  event.preventDefault(); // Скасовує стандартну поведінку форми

  const formData = new FormData(this); // Отримуємо дані з форми

  fetch("server.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json()) // Отримуємо відповідь від сервера
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
