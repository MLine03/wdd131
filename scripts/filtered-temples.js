document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const filterButtons = document.querySelectorAll("nav a");

  const temples = [
    {
      name: "Bern",
      city: "Bern",
      state: "Switzerland",
      year: 1955,
      area: 10700,
      image: "images/bern-switzerland.jpg"
    },
    {
      name: "Cedar City",
      city: "Cedar City",
      state: "Utah",
      year: 2017,
      area: 20000,
      image: "images/cedar-city.jpg"
    },
    {
      name: "Columbus",
      city: "Columbus",
      state: "Ohio",
      year: 1999,
      area: 95000,
      image: "images/columbus.jpg"
    },
    {
      name: "Laie",
      city: "Laie",
      state: "Hawaii",
      year: 1919,
      area: 90000,
      image: "images/laie-hawaii.jpg"
    },
    {
      name: "Logan",
      city: "Logan",
      state: "Utah",
      year: 1884,
      area: 8500,
      image: "images/logan-utah.jpg"
    },
    {
      name: "New York",
      city: "New York",
      state: "New York",
      year: 2004,
      area: 105000,
      image: "images/new-york.jpg"
    },
    {
      name: "Palmyra",
      city: "Palmyra",
      state: "New York",
      year: 2000,
      area: 9000,
      image: "images/palmyra-new-york.jpg"
    },
    {
      name: "Phoenix",
      city: "Phoenix",
      state: "Arizona",
      year: 2014,
      area: 110000,
      image: "images/phoenix-arizona.jpg"
    },
    {
      name: "Rome",
      city: "Rome",
      state: "Italy",
      year: 2019,
      area: 95000,
      image: "images/rome-italy.jpg"
    },
    {
      name: "Portland",
      city: "Portland",
      state: "Oregon",
      year: 1989,
      area: 90000,
      image: "images/portland-temple.jpg"
    },
    {
      name: "Salt Lake",
      city: "Salt Lake City",
      state: "Utah",
      year: 1893,
      area: 115000,
      image: "images/salt-lake-temple.jpg"
    },
    {
      name: "Suva",
      city: "Suva",
      state: "Fiji",
      year: 2000,
      area: 9500,
      image: "images/suva-fiji.jpg"
    },
    {
      name: "Tokyo",
      city: "Tokyo",
      state: "Japan",
      year: 1980,
      area: 8000,
      image: "images/tokyo-japan.jpg"
    }
  ];

  function renderTemples(filter = "all") {
    gallery.innerHTML = "";

    let filteredTemples = temples;

    if (filter === "old") {
      filteredTemples = temples.filter(t => t.year < 1900);
    } else if (filter === "new") {
      filteredTemples = temples.filter(t => t.year > 2000);
    } else if (filter === "small") {
      filteredTemples = temples.filter(t => t.area < 10000);
    } else if (filter === "large") {
      filteredTemples = temples.filter(t => t.area > 90000);
    }

    if (filteredTemples.length === 0) {
      gallery.innerHTML = "<p>No temples match this filter.</p>";
      return;
    }

    filteredTemples.forEach(temple => {
      const card = document.createElement("article");
      card.classList.add("temple-card");

      card.innerHTML = `
        <img src="${temple.image}" alt="${temple.name} Temple" loading="lazy" />
        <h2>${temple.name} Temple</h2>
        <p><strong>Location:</strong> ${temple.city}, ${temple.state}</p>
        <p><strong>Dedicated Year:</strong> ${temple.year}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      `;

      gallery.appendChild(card);
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      renderTemples(button.getAttribute("data-filter"));
    });
  });

  // Initial render
  renderTemples();
});
