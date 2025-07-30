// Product Array for dynamic select options
const products = [
  { id: 'lilikoi', name: 'Lilikoi Juice' },
  { id: 'guava', name: 'Guava Juice' },
  { id: 'coco-puffs', name: 'Coco Puffs' },
  { id: 'macadamia', name: 'Macadamia Cookies' },
  { id: 'haupia', name: 'Haupia' }
];

// Populate product select options dynamically
window.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById('product-name');
  
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Use id for value
    option.textContent = product.name; // Show name to user
    productSelect.appendChild(option);
  });
});
