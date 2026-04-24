const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#primary-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }
  });
}

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const quoteForm = document.querySelector(".lead-form");
const formStatus = document.querySelector(".form-status");

if (quoteForm && formStatus) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks. Your request is ready to connect to WordPress or a CRM.";
  });
}

const revealItems = document.querySelectorAll(".section-reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
