// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  if (navMenu.classList.contains('active')) {
    hamburger.textContent = '✕'; // Change to X to close
  } else {
    hamburger.textContent = '☰'; // Hamburger icon
  }
});

// Dynamic footer info
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;
