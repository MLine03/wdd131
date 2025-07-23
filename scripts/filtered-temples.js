const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "April 6, 1893",
    area: 253015,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "October 27, 1980",
    area: 52590,
    imageUrl: "images/tokyo-japan-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "March 10, 2019",
    area: 41010,
    imageUrl: "images/rome-italy-temple.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "November 27, 1919",
    area: 42320,
    imageUrl: "images/laie-temple.jpg"
  },
  {
    templeName: "Columbus Ohio Temple",
    location: "Columbus, Ohio",
    dedicated: "September 4, 1999",
    area: 10700,
    imageUrl: "images/columbus-temple.jpg"
  },
  {
    templeName: "Phoenix Arizona Temple",
    location: "Phoenix, Arizona",
    dedicated: "November 16, 2014",
    area: 58000,
    imageUrl: "images/phoenix-arizona-temple.jpg"
  },
  {
    templeName: "Suva Fiji Temple",
    location: "Suva, Fiji",
    dedicated: "June 18, 2000",
    area: 18523,
    imageUrl: "images/suva-fiji-temple.jpg"
  }
];

function renderTemples(templeList) {
  const container = document.getElementById("temples");
  container.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

function filterTemples(criteria) {
  let filtered = temples;

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
  }

  renderTemples(filtered);
}

// Initial load
renderTemples(temples);

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
