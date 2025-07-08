// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  const navList = navMenu.querySelector('ul');
  navList.classList.toggle('show');

  // Change hamburger to X when open
  if (navList.classList.contains('show')) {
    hamburger.textContent = '✖';
  } else {
    hamburger.textContent = '☰';
  }
});

// Set dynamic year and last modified date in footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
