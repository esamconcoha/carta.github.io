document.addEventListener("DOMContentLoaded", function () {
  const btnOpen = document.getElementById("open");
  const btnClose = document.getElementById("close");
  const letter = document.getElementById("mainMessage"); // Asegúrate de que el ID sea correcto

  if (!btnOpen || !btnClose || !letter) {
      console.error("Uno o más elementos no fueron encontrados. Verifica los IDs en tu HTML.");
      return;
  }

  btnOpen.addEventListener("click", function () {
      letter.classList.add("open-paper"); // Se agrega la clase que hace visible la carta
      document.querySelector(".cover").classList.add("open-cover"); // Animación de la tapa
  });

  btnClose.addEventListener("click", function () {
      letter.classList.remove("open-paper"); // Se quita la clase que oculta la carta
      document.querySelector(".cover").classList.remove("open-cover"); // Se quita la animación de la tapa
  });
});

 
