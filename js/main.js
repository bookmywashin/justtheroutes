document.addEventListener("DOMContentLoaded", () => {
  loadPartial("contact-bar", "partials/contact-bar.html");
});

function loadPartial(elementId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error("Error loading partial:", error));
}

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

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

