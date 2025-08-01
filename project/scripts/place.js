// Display current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Display last modified date in footer
document.getElementById('lastModified').textContent = document.lastModified;

// Static weather data
const temperature = 32; // °F
const windSpeed = 10;   // mph

// Display temperature and wind speed
document.getElementById('temperature').textContent = temperature;
document.getElementById('wind-speed').textContent = windSpeed;

// Wind Chill calculation (NOAA formula)
function calculateWindChill(tempF, speedMph) {
  if (tempF <= 50 && speedMph > 3) {
    const chill =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speedMph, 0.16) +
      0.4275 * tempF * Math.pow(speedMph, 0.16);
    return `${chill.toFixed(1)} °F`;
  }
  return 'N/A';
}

// Display wind chill
document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);
