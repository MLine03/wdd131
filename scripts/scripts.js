// Product array example (replace with your actual products)
const products = [
  { id: 'soda01', name: 'Tropical Breeze' },
  { id: 'soda02', name: 'Mango Madness' },
  { id: 'soda03', name: 'Pineapple Punch' },
  { id: 'soda04', name: 'Coconut Crush' },
  { id: 'soda05', name: 'Island Lime' }
];

// Populate product options dynamically
window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('product-name');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;       // Use product id as value
    option.textContent = product.name;
    select.appendChild(option);
  });
});
