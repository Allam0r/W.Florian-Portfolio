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
    }, 1000); // Pause de 1 seconde entre les animations
  }, 10000); // 10 secondes (10 secondes d'animation + 1 seconde de pause)
});
