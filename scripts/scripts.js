// Product array example (you can update product names/ids)
const products = [
    { id: 'prod1', name: 'Aloha Pineapple Soda' },
    { id: 'prod2', name: 'Tropical Mango Fizz' },
    { id: 'prod3', name: 'Coconut Breeze' },
    { id: 'prod4', name: 'Hibiscus Delight' }
];

// Populate product select options dynamically
window.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
