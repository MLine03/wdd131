// Footer dynamic content
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Wind Chill Calculation
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const windchillElement = document.getElementById("windchill");

function calculateWindChill(t, s) {
  return 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
}

if (temp <= 50 && wind > 3) {
  const chill = calculateWindChill(temp, wind).toFixed(1);
  windchillElement.textContent = `${chill}°F`;
} else {
  windchillElement.textContent = "N/A";
}
