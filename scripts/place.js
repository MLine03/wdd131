// scripts/place.js

// Display current year in footer
const yearElement = document.getElementById('year');
yearElement.textContent = new Date().getFullYear();

// Display last modified date of document in footer
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = document.lastModified;

// Static temperature and wind speed values
const temperature = 32; // °F
const windSpeed = 10; // mph

// Update temperature and wind speed spans
document.getElementById('temperature').textContent = temperature;
document.getElementById('wind-speed').textContent = windSpeed;

// Function to calculate wind chill (imperial units)
// Formula from NOAA: 
// 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Calculate and display wind chill if conditions met
const windChillElement = document.getElementById('windchill');
if (temperature <= 50 && windSpeed > 3) {
  windChillElement.textContent = calculateWindChill(temperature, windSpeed) + ' °F';
} else {
  windChillElement.textContent = 'N/A';
}
