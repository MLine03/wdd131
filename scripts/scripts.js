// Product Array - given in assignment
const products = [
  { id: "prod1", name: "Super Widget" },
  { id: "prod2", name: "Mega Gadget" },
  { id: "prod3", name: "Ultra Tool" }
];

// Dynamically populate product select options
const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;      // product id as value
  option.textContent = product.name;  // product name as visible text
  productSelect.appendChild(option);
});

