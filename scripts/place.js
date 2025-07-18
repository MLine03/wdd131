// scripts/place.js

// Calculate wind chill factor (Fahrenheit)
function calculateWindChill(tempF, speedMph) {
  return 35.74 + 0.6215 * tempF - 35.75 * (speedMph ** 0.16) + 0.4275 * tempF * (speedMph ** 0.16);
}

function displayWindChill() {
  const temp = 32; // static temperature
  const windSpeed = 10; // static wind speed
  const windChillElem = document.getElementById('windchill');

  // Only calculate wind chill if conditions met
  if (temp <= 50 && windSpeed > 3) {
    const chill = calculateWindChill(temp, windSpeed);
    windChillElem.textContent = chill.toFixed(1) + "°F";
  } else {
    windChillElem.textContent = "N/A";
  }
}

function displayFooterDates() {
  const yearElem = document.getElementById('year');
  const lastModifiedElem = document.getElementById('lastModified');

  yearElem.textContent = new Date().getFullYear();
  lastModifiedElem.textContent = document.lastModified;
}

// Run on page load
window.onload = () => {
  displayWindChill();
  displayFooterDates();
};
