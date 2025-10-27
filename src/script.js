// Hamburger menu functionality
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");
const closeMenuBtn = document.getElementById("closeMenuBtn");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  document.body.classList.add("overflow-hidden"); // Prevent background scrolling
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});

// Hide mobile menu when clicking links
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });
});

// Scroll to Menu when clicking "Order Now"
document.getElementById("orderNowBtn").addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

// Contact form submission with client-side feedback
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (name && email && message) {
    // Simulate sending
    formMessage.classList.remove("hidden");
    contactForm.reset();
    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 3000);
  }
});
