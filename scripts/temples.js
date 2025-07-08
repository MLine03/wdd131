// Toggle navigation menu on hamburger click
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  // Change hamburger to X or back
  if (navMenu.classList.contains('open')) {
    hamburger.innerHTML = '&times;'; // X symbol
  } else {
    hamburger.innerHTML = '&#9776;'; // hamburger symbol
  }
});

// Footer copyright year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
