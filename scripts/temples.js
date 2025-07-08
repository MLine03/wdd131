// Toggle nav menu for hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
    hamburger.textContent = '☰';
  } else {
    navMenu.style.display = 'flex';
    hamburger.textContent = '✕';
  }
});

// Update footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
