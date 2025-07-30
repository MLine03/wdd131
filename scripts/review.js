window.addEventListener('DOMContentLoaded', () => {
  let reviewCount = localStorage.getItem('reviewCount');
  reviewCount = reviewCount ? Number(reviewCount) + 1 : 1;
  localStorage.setItem('reviewCount', reviewCount);

  const counterDisplay = document.getElementById('review-counter');
  if (counterDisplay) {
    counterDisplay.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? 's' : ''}. Mahalo! 🌺`;
  }
});
