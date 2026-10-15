
const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("nexamuda-theme");
if (savedTheme === "dark") body.classList.add("dark-mode");

function updateThemeButton() {
  const dark = body.classList.contains("dark-mode");
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
updateThemeButton();
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("nexamuda-theme", body.classList.contains("dark-mode") ? "dark" : "light");
  updateThemeButton();
});

// Mobile navigation closes after a link is selected.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
