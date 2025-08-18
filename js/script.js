const acc = document.querySelectorAll(".accordion-btn");

acc.forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
    button.classList.toggle("active");
  });
});
