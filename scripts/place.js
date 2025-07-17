// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Calculate wind chill factor function
function calculateWindChill(temp, windSpeed) {
  // Conditions to apply wind chill formula (metric)
  if (temp <= 10 && windSpeed > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
  } else {
    return 'N/A';
  }
}

// Get static temp and wind speed from HTML
const temp = parseFloat(document.getElementById('temp').textContent);
const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

// Calculate and display wind chill
document.getElementById('windChill').textContent = calculateWindChill(temp, windSpeed);
