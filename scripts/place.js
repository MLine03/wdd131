// scripts/place.js

function calculateWindChill(tempF, speedMph) {
  return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);
}

function displayWindChill() {
  const temp = 32;
  const windSpeed = 10;
  const windChillElem = document.getElementById('windchill');

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

window.onload = () => {
  displayWindChill();
  displayFooterDates();
};
