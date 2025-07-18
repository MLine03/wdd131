function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

const temp = 32; // match HTML
const windSpeed = 10; // match HTML

const windChillSpan = document.getElementById("windchill");

if (temp <= 50 && windSpeed > 3) {
  windChillSpan.textContent = `${calculateWindChill(temp, windSpeed)} °F`;
} else {
  windChillSpan.textContent = "N/A";
}

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
