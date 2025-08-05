// js/flavor.js

const flavors = [
  "Lilikoi Fizz",
  "Mango Madness",
  "Pineapple Breeze",
  "Coconut Lime",
  "Guava Blast"
];

function getRandomFlavor() {
  const index = Math.floor(Math.random() * flavors.length);
  return flavors[index];
}

function displayFlavorOfTheDay() {
  const flavorElement = document.getElementById("flavorText");
  const flavor = getRandomFlavor();
  flavorElement.textContent = `Today's flavor is: ${flavor}! 🍹`;

  // Save to localStorage
  localStorage.setItem("flavorOfTheDay", flavor);
}

document.addEventListener("DOMContentLoaded", displayFlavorOfTheDay);
