document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const filterButtons = document.querySelectorAll("nav a");

    const temples = [
        {
            name: "Bern",
            city: "Bern",
            state: "Switzerland",
            year: 1955,
            size: "small",
            image: "images/bern-switzerland.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Cedar City",
            city: "Cedar City",
            state: "Utah",
            year: 2017,
            size: "small",
            image: "images/cedar-city.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Columbus",
            city: "Columbus",
            state: "Ohio",
            year: 1999,
            size: "large",
            image: "images/columbus.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Laie",
            city: "Laie",
            state: "Hawaii",
            year: 1919,
            size: "large",
            image: "images/laie-hawaii.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Logan",
            city: "Logan",
            state: "Utah",
            year: 1884,
            size: "small",
            image: "images/logan-utah.jpg",
            width: 300,
            height: 200
        },
        {
            name: "New York",
            city: "New York",
            state: "New York",
            year: 2004,
            size: "large",
            image: "images/new-york.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Palmyra",
            city: "Palmyra",
            state: "New York",
            year: 2000,
            size: "small",
            image: "images/palmyra-new-york.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Phoenix",
            city: "Phoenix",
            state: "Arizona",
            year: 2014,
            size: "large",
            image: "images/phoenix-arizona.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Rome",
            city: "Rome",
            state: "Italy",
            year: 2019,
            size: "large",
            image: "images/rome-italy.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Portland",
            city: "Portland",
            state: "Oregon",
            year: 1989,
            size: "large",
            image: "images/portland-temple.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Salt Lake",
            city: "Salt Lake City",
            state: "Utah",
            year: 1893,
            size: "large",
            image: "images/salt-lake-temple.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Suva",
            city: "Suva",
            state: "Fiji",
            year: 2000,
            size: "small",
            image: "images/suva-fiji.jpg",
            width: 300,
            height: 200
        },
        {
            name: "Tokyo",
            city: "Tokyo",
            state: "Japan",
            year: 1980,
            size: "small",
            image: "images/tokyo-japan.jpg",
            width: 300,
            height: 200
        }
    ];

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
                <img src="${temple.image}" alt="${temple.name} Temple" loading="lazy" width="${temple.width}" height="${temple.height}" />
                <h2>${temple.name} Temple</h2>
                <p><strong>Location:</strong> ${temple.city}, ${temple.state}</p>
                <p><strong>Dedicated Year:</strong> ${temple.year}</p>
                <p><strong>Size:</strong> ${temple.size.charAt(0).toUpperCase() + temple.size.slice(1)}</p>
            `;

            gallery.appendChild(card);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            renderTemples(button.getAttribute("data-filter"));
        });
    });

    // Initial render
    renderTemples();
});
