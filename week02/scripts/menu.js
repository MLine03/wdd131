const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');

  // Toggle icon between ☰ and ❎
  const isOpen = nav.classList.contains('open');
  menuButton.textContent = isOpen ? '❎' : '☰';
});
