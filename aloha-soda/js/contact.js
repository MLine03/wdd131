// Simple JS form submission handler to show confirmation message
const form = document.getElementById('contactForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent actual form submission

  // Basic HTML5 validation check
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Show confirmation message
  confirmation.style.display = 'block';

  // Clear the form
  form.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    confirmation.style.display = 'none';
  }, 5000);
});
