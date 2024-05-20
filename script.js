document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) / 20) * 2;
    const y = ((e.clientY - rect.top - rect.height / 2) / 20) * 2;

    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    card.style.boxShadow = `${x}px ${y}px 100px 1px #cacaca`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    card.style.boxShadow = "12px 12px 100px #cacaca";
  });
});
