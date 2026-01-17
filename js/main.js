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
      button.classList.add("read-more-initialized");
    }
  });
}

// ===== Mobile Menu Toggle =====
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
}

// ===== Optional: Global Contact Ticker =====
const contactBar = document.getElementById("contact-bar");
if(contactBar){
  contactBar.innerHTML = '<marquee>Call: +91-XXXXXXXXXX | WhatsApp: +91-XXXXXXXXXX | Email: info@justtheroutes.com</marquee>';
}
/* ===============================
   HERO SLIDER (AUTO)
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;

  if (slides.length > 1) {
    slides.forEach((slide, index) => {
      slide.style.opacity = index === 0 ? "1" : "0";
      slide.style.position = "absolute";
      slide.style.inset = "0";
      slide.style.transition = "opacity 1s ease";
    });

    setInterval(() => {
      slides[currentSlide].style.opacity = "0";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.opacity = "1";
    }, 5000);
  }
});

/* ===============================
   FAQ TOGGLE
================================ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      q.classList.toggle("active");
      const answer = q.nextElementSibling;
      answer.style.maxHeight
        ? answer.style.maxHeight = null
        : answer.style.maxHeight = answer.scrollHeight + "px";
    });
  });
});

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    button.classList.toggle("active");

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
setTimeout(() => {
  document.getElementById("lead-popup").style.display = "flex";
}, 8000);

document.getElementById("closePopup").onclick = () => {
  document.getElementById("lead-popup").style.display = "none";
};

