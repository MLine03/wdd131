const temples = [
  {
    name: "Bern Switzerland Temple",
    img: "images/bern-switzerland.jpg",
    description: "Located in Bern, Switzerland."
  },
  {
    name: "Cedar City Utah Temple",
    img: "images/cedar-city.jpg",
    description: "Located in Cedar City, Utah."
  },
  {
    name: "Columbus Ohio Temple",
    img: "images/columbus.jpg",
    description: "Located in Columbus, Ohio."
  },
  {
    name: "Laie Hawaii Temple",
    img: "images/laie-hawaii.jpg",
    description: "Located in Laie, Hawaii."
  },
  {
    name: "Logan Utah Temple",
    img: "images/logan-utah.jpg",
    description: "Located in Logan, Utah."
  },
  {
    name: "New York New York Temple",
    img: "images/new-york.jpg",
    description: "Located in New York City, New York."
  },
  {
    name: "Palmyra New York Temple",
    img: "images/palmyra-new-york.jpg",
    description: "Located in Palmyra, New York."
  },
  {
    name: "Phoenix Arizona Temple",
    img: "images/phoenix-arizona.jpg",
    description: "Located in Phoenix, Arizona."
  },
  {
    name: "Rome Italy Temple",
    img: "images/rome-italy.jpg",
    description: "Located in Rome, Italy."
  },
  {
    name: "Portland Oregon Temple",
    img: "images/portland-temple.jpg",
    description: "Located in Portland, Oregon."
  },
  {
    name: "Salt Lake Temple",
    img: "images/salt-lake-temple.jpg",
    description: "Located in Salt Lake City, Utah."
  },
  {
    name: "Suva Fiji Temple",
    img: "images/suva-fiji.jpg",
    description: "Located in Suva, Fiji."
  },
  {
    name: "Tokyo Japan Temple",
    img: "images/tokyo-japan.jpg",
    description: "Located in Tokyo, Japan."
  }
];

// Render temples into the DOM
function renderTemples() {
  const templeContainer = document.getElementById("temple-list");
  if (!templeContainer) {
    console.error("Temple container element not found");
    return;
  }

  templeContainer.innerHTML = temples.map(temple => `
    <article class="temple">
      <img src="${temple.img}" alt="${temple.name}" width="300" height="200" loading="lazy" />
      <h2>${temple.name}</h2>
      <p>${temple.description}</p>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderTemples);
