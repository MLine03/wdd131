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

// Grab container
const templeCardsContainer = document.getElementById('temple-cards');

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

function displayTemples(list) {
  templeCardsContainer.innerHTML = '';
  list.forEach(temple => {
    templeCardsContainer.appendChild(createTempleCard(temple));
  });
}

// Initially display all temples
displayTemples(temples);

// Filtering buttons
document.getElementById('home').addEventListener('click', e => {
  e.preventDefault();
  displayTemples(temples);
});
document.getElementById('old').addE
