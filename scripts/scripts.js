document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 'lilikoi_juice', name: 'Lilikoi Juice' },
    { id: 'guava_juice', name: 'Guava Juice' },
    { id: 'macadamia_cookies', name: 'Macadamia Cookies' },
    { id: 'haupia', name: 'Haupia' },
    { id: 'lihing_mui_juice', name: 'Li Hing Mui Juice' },
    { id: 'coco_puffs', name: 'Coco Puffs' }
  ];

  const select = document.getElementById('product-name');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
