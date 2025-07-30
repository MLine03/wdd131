window.addEventListener('DOMContentLoaded', () => {
  let reviewCount = localStorage.getItem('reviewCount');
  reviewCount = reviewCount ? Number(reviewCount) + 1 : 1;
  localStorage.setItem('reviewCount', reviewCount);

  const counterDisplay = document.getElementById('reviewCount');
  if (counterDisplay) {
    counterDisplay.textContent = `${reviewCount}`;
  }
});
