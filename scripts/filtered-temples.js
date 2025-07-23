document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        {
            name: "Bern Switzerland",
            city: "Bern",
            state: "Switzerland",
            image: "images/bern-switzerland.jpg",
            year: 1955,
            size: "small"
        },
        {
            name: "Cedar City",
            city: "Cedar City",
            state: "Utah",
            image: "images/cedar-city.jpg",
            year: 2017,
            size: "small"
        },
        {
            name: "Columbus",
            city: "Columbus",
            state: "Ohio",
            image: "images/columbus.jpg",
            year: 1999,
            size: "large"
        },
        {
            name: "Laie Hawaii",
            city: "Laie",
            state: "Hawaii",
            image: "images/laie-hawaii.jpg",
            year: 1919,
            size: "large"
        },
        {
            name: "Logan Utah",
            city: "Logan",
            state: "Utah",
            image: "images/logan-utah.jpg",
            year: 1884,
            size: "large"
        },
        {
            name: "New York",
            city: "New York",
            state: "New York",
            image: "images/new-york.jpg",
            year: 2004,
            size: "large"
        },
        {
            name: "Palmyra New York",
            city: "Palmyra",
            state: "New York",
            image: "images/palmyra-new-york.jpg",
            year: 2000,
            size: "small"
        },
        {
            name: "Phoenix Arizona",
            city: "Phoenix",
            state: "Arizona",
            image: "images/phoenix-arizona.jpg",
            year: 2014,
            size: "large"
        },
        {
            name: "Rome Italy",
            city: "Rome",
            state: "Italy",
            image: "images/rome-italy.jpg",
            year: 2019,
            size: "small"
        },
        {
            name: "Portland Temple",
            city: "Portland",
            state: "Oregon",
            image: "images/portland-temple.jpg",
            year: 1989,
            size: "small"
        },
        {
            name: "Salt Lake Temple",
            city: "Salt Lake City",
            state: "Utah",
            image: "images/salt-lake-temple.jpg",
            year: 1893,
            size: "large"
        },
        {
            name: "Suva Fiji",
            city: "Suva",
            state: "Fiji",
            image: "images/suva-fiji.jpg",
            year: 2000,
            size: "small"
        },
        {
            name: "Tokyo Japan",
            city: "Tokyo",
            state: "Japan",
            image: "images/tokyo-japan.jpg",
            year: 1980,
            size: "large"
        }
    ];

    const gallery = document.getElementById("temple-gallery");
    const filterButtons = document.querySelectorAll("#filters button");

    // Render temples function
    function renderTemples(filter = "all") {
        gallery.innerHTML = "";

        let filteredTemples = temples;

        if (filter === "old") {
            filteredTemples = temples.filter(t => t.year < 1950);
        } else if (filter === "new") {
            filteredTemples = temples.filter(t => t.year >= 1950);
        } else if (filter === "small") {
            filteredTemples = temples.filter(t => t.size === "small");
        } else if (filter === "large") {
            filteredTemples = temples.filter(t => t.size === "large");
        }

        filteredTemples.forEach(temple => {
            const card = document.createElement("article");
            card.classList.add("temple-card");

            card.innerHTML = `
                <img src="${temple.image}" alt="${temple.name} Temple" loading="lazy" />
                <h2>${temple.name} Temple</h2>
                <p><strong>Location:</strong> ${temple.city}, ${temple.state}</p>
                <p><strong>Dedicated Year:</strong> ${temple.year}</p>
                <p><strong>Size:</strong> ${temple.size.charAt(0).toUpperCase() + temple.size.slice(1)}</p>
            `;

            gallery.appendChild(card);
        });
    }

    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            renderTemples(button.getAttribute("data-filter"));
        });
    });

    // Initial render
    renderTemples();
});
