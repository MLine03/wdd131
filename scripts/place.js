// scripts/place.js

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Update last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Calculate wind chill if temperature and wind speed are valid
function calculateWindChill(tempC, windSpeedKmh) {
  if (tempC <= 10 && windSpeedKmh > 4.8) {
    // Wind chill formula (Celsius)
    const v = Math.pow(windSpeedKmh, 0.16);
    return Math.round(
      13.12 + 0.6215 * tempC - 11.37 * v + 0.3965 * tempC * v
    );
  } else {
    return tempC; // No wind chill effect, return actual temp
  }
}

// Get elements
const tempElem = document.getElementById('temp');
const windSpeedElem = document.getElementById('windSpeed');
const windChillElem = document.getElementById('windChill');

if (tempElem && windSpeedElem && windChillElem) {
  const temp = parseFloat(tempElem.textContent);
  const windSpeed = parseFloat(windSpeedElem.textContent);

  const windChill = calculateWindChill(temp, windSpeed);

  windChillElem.textContent = windChill === temp ? 'N/A' : `${windChill} °C`;
}
