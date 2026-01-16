// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll reveal (basic)
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll(".read-more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.previousElementSibling;
    content.classList.toggle("open");
    btn.textContent = content.classList.contains("open")
      ? "Read less"
      : "Read more";
  });
});
