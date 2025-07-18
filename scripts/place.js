// scripts/place.js

// Display current year in footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Display last modified date of document in footer
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
  lastModifiedElement.textContent = document.lastModified;
}

// Static temperature and wind speed values (°F and mph)
const temperature = 32;
const windSpeed = 10;

// Update temperature and wind speed in the DOM
const tempElement = document.getElementById('temperature');
if (tempElement) tempElement.textContent = temperature;

const windSpeedElement = document.getElementById('wind-speed');
if (windSpeedElement) windSpeedElement.textContent = windSpeed;

// Calculate wind chill using NOAA formula (imperial units)
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Calculate and display wind chill or N/A if conditions not met
const windChillElement = document.getElementById('windchill');
if (windChillElement) {
  if (temperature <= 50 && windSpeed > 3) {
    windChillElement.textContent = calculateWindChill(temperature, windSpeed) + ' °F';
  } else {
    windChillElement.textContent = 'N/A';
  }
}
