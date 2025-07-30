// scripts/review.js
document.addEventListener('DOMContentLoaded', () => {
  // Get current count from localStorage or start at 0
  let count = localStorage.getItem('reviewCount');
  if (!count) {
    count = 0;
  }
  count = Number(count) + 1;
  localStorage.setItem('reviewCount', count);

  // Update the page with count
  document.getElementById('reviewCount').textContent = count;
});
