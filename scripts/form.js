// scripts/form.js

// Example: Simple form submit handler (optional)
document.querySelector('form').addEventListener('submit', function(event) {
  alert('Thank you for submitting your review!');
  // Form will still submit normally (to review.html) because no preventDefault() used
});
