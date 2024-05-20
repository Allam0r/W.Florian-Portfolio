document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");

  function startAutoAnimate() {
    card.classList.add("auto-animate");
  }

  function stopAutoAnimate() {
    card.classList.remove("auto-animate");
  }

  startAutoAnimate();
  setInterval(function () {
    stopAutoAnimate();
    setTimeout(function () {
      startAutoAnimate();
    }, 4000); // Pause de 4 seconde entre les animations
  }, 14000); // 14 secondes (10 secondes d'animation + 4 seconde de pause)
});
