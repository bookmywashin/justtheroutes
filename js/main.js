// ===== Load partials (like contact-bar) =====
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("contact-bar", "partials/contact-bar.html");
  initReadMoreButtons();
  initMobileMenu();
});

// Function to load HTML partials
function loadPartial(elementId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
      // Re-initialize Read More buttons if new content has any
      initReadMoreButtons();
    })
    .catch(error => console.error("Error loading partial:", error));
}

// ===== Read More Buttons =====
function initReadMoreButtons() {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(button => {
    // Prevent adding multiple listeners
    if (!button.classList.contains("read-more-initialized")) {
      button.addEventListener("click", () => {
        const content = button.previousElementSibling;
        if (content) {
          content.classList.toggle("open");
          button.textContent = content.classList.contains("open")
            ? "Read less"
            : "Read more";
        }
      });
      button.classList.add("read-more-initialize
