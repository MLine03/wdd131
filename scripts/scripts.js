// Product array as provided by assignment
const products = [
  { id: "prod1", name: "Smartphone X" },
  { id: "prod2", name: "Bluetooth Headphones" },
  { id: "prod3", name: "Wireless Charger" },
  { id: "prod4", name: "Smartwatch Pro" },
  { id: "prod5", name: "Laptop Ultra" }
];

window.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById('product-name');
  
  // Dynamically add product options to select field
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;       // Assignment requires value = product.name
    option.textContent = product.name; // Display product name
    productSelect.appendChild(option);
  });

  console.log("Product options populated.");
});
