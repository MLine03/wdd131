// Array of temple objects
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    name: "Kirtland Temple",
    location: "Kirtland, Ohio, USA",
    dedicated: "1836-03-27",
    area: 7000,
    imageUrl: "images/kirtland-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 30000,
    imageUrl: "images/rome-temple.jpg"
  },
  // Added 3 new temples
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 12000,
    imageUrl: "images/tokyo-temple.jpg"
  },
  {
    name: "Denver Colorado Temple",
    location: "Denver, Colorado, USA",
    dedicated: "1986-10-24",
    area: 46000,
    imageUrl: "images/denver-temple.jpg"
  },
  {
    name: "San Diego California Temple",
    location: "San Diego, California, USA",
    dedicated: "1993-04-25",
    area: 29000,
    imageUrl: "images/sandiego-temple.jpg"
  }
];

// Select container for temple cards
const templeCardsContainer = document.getElementById('temple-cards');

// Function to create a temple card element
function createTempleCard(temple) {
  const card = document.createElement('section');
  card.className = 'temple-card';

  card.innerHTML = `
    <h2>${temple.name}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString()}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" alt="Image of ${temple.name}" loading="lazy" />
  `;
  return card;
}

// Function to display temples array
function displayTemples(templesToDisplay) {
  templeCardsContainer.innerHTML = '';
  templesToDisplay.forEach(temple => {
    templeCardsContainer.appendChild(createTempleCard(temple));
  });
}

// Initial display all temples
displayTemples(temples);

// Filtering handlers
document.getElementById('home').addEventListener('click', e => {
  e.preventDefault();
  displayTemples(temples);
});

document.getElementById('old').addEventListener('click', e => {
  e.preventDefault();
  const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  displayTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', e => {
  e.preventDefault();
  const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  displayTemples(newTemples);
});

document.getElementById('large').addEventListener('click', e => {
  e.preventDefault();
  const largeTemples = temples.filter(t => t.area > 90000);
  displayTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', e => {
  e.preventDefault();
  const smallTemples = temples.filter(t => t.area < 10000);
  displayTemples(smallTemples);
});

// Footer date and year
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
