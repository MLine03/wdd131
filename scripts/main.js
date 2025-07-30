document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 'pineapple', name: 'Pineapple Paradise' },
    { id: 'mango', name: 'Mango Magic' },
    { id: 'guava', name: 'Guava Delight' },
    { id: 'passionfruit', name: 'Passionfruit Punch' },
  ];

  const select = document.getElementById('flavor');

  // Optional: Clear existing options except the placeholder
  select.querySelectorAll('option:not([value=""])').forEach(opt => opt.remove());

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
