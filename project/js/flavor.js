// Flavor of the Day options
const flavors = [
  {
    name: "Lilikoi Fizz",
    image: "images/lilikoi-fizz.jpg",
    description: "Try our tropical Lilikoi Fizz soda today!"
  },
  {
    name: "Laie Breeze",
    image: "images/laie-breeze.jpg",
    description: "A bold fusion of Dr Pepper, coconut cream, and lime — fizzy and tropical with island edge."
  },
  {
    name: "Hukilau Dream",
    image: "images/hukilau-dream.jpg",
    description: "A Diet Coke base with creamy vanilla and cherry — a light island twist on a classic beach dream."
  },
  {
    name: "Aloha Dew",
    image: "images/aloha-dew.jpg",
    description: "A sweet blend of melon and honeydew inspired by island mornings."
  }
];

// Select elements
const flavorImg = document.getElementById('flavor-img');
const flavorDesc = document.getElementById('flavor-description');

// Randomly pick a flavor
const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];

// Update the page content
flavorImg.src = randomFlavor.image;
flavorImg.alt = `Flavor of the Day: ${randomFlavor.name}`;
flavorDesc.textContent = randomFlavor.description;
