const temples = [
  { name: "Bern Switzerland Temple", location: "Bern, Switzerland", dedicated: "1955-09-11", area: 16000, imageUrl: "images/bern-switzerland.jpg" },
  { name: "Cedar City Utah Temple", location: "Cedar City, Utah, USA", dedicated: "2017-10-29", area: 11300, imageUrl: "images/cedar-city.jpg" },
  { name: "Columbus Ohio Temple", location: "Columbus, Ohio, USA", dedicated: "1999-09-05", area: 20500, imageUrl: "images/columbus-ohio.jpg" },
  { name: "Laie Hawaii Temple", location: "Laie, Hawaii, USA", dedicated: "1919-11-27", area: 19000, imageUrl: "images/laie-hawaii.jpg" },
  { name: "Logan Utah Temple", location: "Logan, Utah, USA", dedicated: "1884-05-17", area: 26000, imageUrl: "images/logan-utah.jpg" },
  { name: "New York New York Temple", location: "New York City, New York, USA", dedicated: "2004-06-13", area: 20000, imageUrl: "images/new-york-ny.jpg" },
  { name: "Palmyra New York Temple", location: "Palmyra, New York, USA", dedicated: "2000-04-06", area: 25000, imageUrl: "images/palmyra-ny.jpg" },
  { name: "Phoenix Arizona Temple", location: "Phoenix, Arizona, USA", dedicated: "2014-03-02", area: 28000, imageUrl: "images/phoenix-arizona.jpg" },
  { name: "Rome Italy Temple", location: "Rome, Italy", dedicated: "2019-03-10", area: 30000, imageUrl: "images/rome-italy.jpg" },
  { name: "Portland Oregon Temple", location: "Portland, Oregon, USA", dedicated: "1989-01-22", area: 22500, imageUrl: "images/portland-oregon.jpg" },
  { name: "Salt Lake Temple", location: "Salt Lake City, Utah, USA", dedicated: "1893-04-06", area: 253000, imageUrl: "images/salt-lake-temple.jpg" },
  { name: "Suva Fiji Temple", location: "Suva, Fiji", dedicated: "2000-08-21", area: 10000, imageUrl: "images/suva-fiji.jpg" },
  { name: "Tokyo Japan Temple", location: "Tokyo, Japan", dedicated: "1980-10-27", area: 12000, imageUrl: "images/tokyo-japan.jpg" }
];

const templesContainer = document.getElementById("temples-container");

function createTempleCard(t) {
  const card = document.createElement("article");
  card.className = "temple-card";

  const img = document.createElement("img");
  img.className = "temple-image";
  img.src = t.imageUrl;
  img.alt = `Image of ${t.name}`;
  img.loading = "lazy";
  img.onerror = () => img.src = "https://via.placeholder.com/300x180?text=Image+Not+Found";

  const info = document.createElement("div");
  info.className = "temple-info";
  info.innerHTML = `
    <h2>${t.name}</h2>
    <p><strong>Location:</strong> ${t.location}</p>
    <p><strong>Dedicated:</strong> ${new Date(t.dedicated).toLocaleDateString()}</p>
    <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
  `;

  card.append(img, info);
  return card;
}

function displayTemples(list) {
  templesContainer.innerHTML = "";
  list.forEach(t => templesContainer.appendChild(createTempleCard(t)));
}

function setActive(id) {
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("active", a.id === id));
}

document.getElementById("filter-home").addEventListener("click", e => { e.preventDefault(); setActive("filter-home"); displayTemples(temples); });
document.getElementById("filter-old").addEventListener("click", e => { e.preventDefault(); setActive("filter-old"); displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900)); });
document.getElementById("filter-new").addEventListener("click", e => { e.preventDefault(); setActive("filter-new"); displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000)); });
document.getElementById("filter-large").addEventListener("click", e => { e.preventDefault(); setActive("filter-large"); displayTemples(temples.filter(t => t.area > 90000)); });
document.getElementById("filter-small").addEventListener("click", e => { e.preventDefault(); setActive("filter-small"); displayTemples(temples.filter(t => t.area < 10000)); });

document.getElementById("copyright-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

displayTemples(temples);
