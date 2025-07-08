// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;