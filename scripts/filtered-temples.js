// Temple Data Array
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/fhp/temples/salt-lake-utah-temple-400x267.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42300,
    imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/fhp/temples/laie-hawaii-temple-400x267.jpg"
  },
  {
    name: "Kirtland Temple",
    location: "Kirtland, Ohio",
    dedicated: "1836-03-27",
    area: 9500,
    imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/fhp/temples/kirtland-temple-400x267.jpg"
  },
  // Added temples:
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 62000,
    imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/fhp/temples/rome-italy-temple-400x267.jpg"
  },
  {
    name: "Freiberg Germany Temple",
    location: "Freiberg, Germany",
    dedicated: "1985-06-29",
    area: 30000,
    imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/fhp/temples/freiberg-germany-temple-400x267.jpg"
  },
  {
    name: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923-08-26",
    area: 8600,
    imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/fhp/temples/cardston-alberta-temple-400x267.jpg"
  },
  {
    name: "Brigham City Utah Temple",
    location: "Brigham City, Utah",
    dedicated: "2012-01-08",
    area: 11000,
    imageUrl: "https://www.churchofjesuschrist.org/bc/content/shared/content/images/fhp/temples/brigham-city-utah-temple-400x267.jpg"
  },
];

// DOM Elements
const container = document.getElementById("temple-cards");
const navLinks = document.querySelectorAll("nav a");

// Render temple cards
function renderTemples(templeList) {
  container.innerHTML = ""; // Clear existing cards

  if (templeList.length === 0) {
    container.innerHTML = "<p>No temples match the selected criteria.</p>";
    return;
  }

  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.className = "temple-card";

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <img src="${temple.imageUrl}" loading="lazy" alt="${temple.name}" />
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString()}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

// Filter temples by criteria
function filterTemples(criteria) {
  let filtered = [];

  switch(criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated) < new Date("1900-01-01"));
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated) > new Date("2000-01-01"));
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  renderTemples(filtered);
}

// Event listeners for nav links
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    filterTemples(link.id);
  });
});

// Footer date updates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial render all temples
renderTemples(temples);
