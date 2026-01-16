document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.previousElementSibling;
      content.classList.toggle("open");
      button.textContent = content.classList.contains("open")
        ? "Read less"
        : "Read more";
    });
  });
});
