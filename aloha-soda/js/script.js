// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  // Flavor of the Day
  const flavorText = document.getElementById('flavorText');
  const flavors = [
    'Lilikoi Fizz - a tropical passionfruit delight!',
    'Sunshine Girl - citrusy and bright!',
    'Furikake Popcorn Soda - savory and sweet!',
    'Sugar Cookie Soda - creamy sweetness!',
    'Sunset Swell - smooth fruity flavor!',
    'Aloha Fizz - our signature tropical soda!'
  ];Add flavor of the day feature and contact form validation in script.js


  if (flavorText) {
    const dayIndex = new Date().getDay(); // 0=Sunday, 1=Monday, etc.
    const flavorOfTheDay = flavors[dayIndex % flavors.length];
    flavorText.textContent = flavorOfTheDay;
  }

  // Contact form validation
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (event) => {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        event.preventDefault();
        return;
      }

      // Simple email format check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
      }
    });
  }
});
