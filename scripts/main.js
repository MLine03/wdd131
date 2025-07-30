/// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 'aloha01', name: 'Pineapple Paradise' },
    { id: 'aloha02', name: 'Mango Magic' },
    { id: 'aloha03', name: 'Coconut Crush' },
    { id: 'aloha04', name: 'Tropical Breeze' },
  ];

  const select = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
