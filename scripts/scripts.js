const products = [
  { id: 'lilikoi', name: 'Lilikoi Juice' },
  { id: 'guava', name: 'Guava Juice' },
  { id: 'coco-puffs', name: 'Coco Puffs' },
  { id: 'macadamia', name: 'Macadamia Cookies' },
  { id: 'haupia', name: 'Haupia' }
];

window.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById('product-name');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
