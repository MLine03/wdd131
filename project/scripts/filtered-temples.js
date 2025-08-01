const temples = [
  {
    name: "Bern Switzerland Temple",
    img: "images/bern-switzerland.jpg",
    description: "Located in Bern, Switzerland.",
    location: "international"
  },
  {
    name: "Cedar City Utah Temple",
    img: "images/cedar-city.jpg",
    description: "Located in Cedar City, Utah.",
    location: "utah"
  },
  {
    name: "Columbus Ohio Temple",
    img: "images/columbus.jpg",
    description: "Located in Columbus, Ohio.",
    location: "usa"
  },
  {
    name: "Laie Hawaii Temple",
    img: "images/laie-hawaii.jpg",
    description: "Located in Laie, Hawaii.",
    location: "usa"
  },
  {
    name: "Logan Utah Temple",
    img: "images/logan-utah.jpg",
    description: "Located in Logan, Utah.",
    location: "utah"
  },
  {
    name: "New York New York Temple",
    img: "images/new-york.jpg",
    description: "Located in New York City, New York.",
    location: "new-york"
  },
  {
    name: "Palmyra New York Temple",
    img: "images/palmyra-new-york.jpg",
    description: "Located in Palmyra, New York.",
    location: "new-york"
  },
  {
    name: "Phoenix Arizona Temple",
    img: "images/phoenix-arizona.jpg",
    description: "Located in Phoenix, Arizona.",
    location: "usa"
  },
  {
    name: "Rome Italy Temple",
    img: "images/rome-italy.jpg",
    description: "Located in Rome, Italy.",
    location: "international"
  },
  {
    name: "Portland Oregon Temple",
    img: "images/portland-temple.jpg",
    description: "Located in Portland, Oregon.",
    location: "usa"
  },
  {
    name: "Salt Lake Temple",
    img: "images/salt-lake-temple.jpg",
    description: "Located in Salt Lake City, Utah.",
    location: "utah"
  },
  {
    name: "Suva Fiji Temple",
    img: "images/suva-fiji.jpg",
    description: "Located in Suva, Fiji.",
    location: "international"
  },
  {
    name: "Tokyo Japan Temple",
    img: "images/tokyo-japan.jpg",
    description: "Located in Tokyo, Japan.",
    location: "international"
  }
];

function renderTemples(filter = "all") {
  const container = document.getElementById("temple-list");
  if (!container) return;

  const filteredTemples = filter === "all"
    ? temples
    : temples.filter(t => t.location === filter);

  container.innerHTML = filteredTemples.map(t => `
    <article class="temple">
      <img src="${t.img}" alt="${t.name}" width="300" height="200" loading="lazy">
      <h2>${t.name}</h2>
      <p>${t.description}</p>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderTemples();

  const filterSelect = document.getElementById("templeFilter");
  if (filterSelect) {
    filterSelect.addEventListener("change", e => {
      renderTemples(e.target.value);
    });
  }
});
