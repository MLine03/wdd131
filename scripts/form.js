// Simple example: log form submission data to console (can be expanded)
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent real submission for demo

  const formData = new FormData(this);
  const entries = Object.fromEntries(formData.entries());

  console.log('Form submission data:', entries);

  alert('Thank you for submitting your review!');
  // You can uncomment below line to actually submit if connected to a server
  // this.submit();
});
