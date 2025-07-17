// Static values for temperature and wind speed
const temperature = 8;  // Celsius
const windSpeed = 10;   // km/h

// Function to calculate wind chill in Celsius (one line)
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

window.addEventListener('DOMContentLoaded', () => {
  const windChillEl = document.getElementById('windChill');
  const tempEl = document.getElementById('temp');
  const windSpeedEl = document.getElementById('windSpeed');
  const yearEl = document.getElementById('year');
  const lastModifiedEl = document.getElementById('lastModified');

  // Display static temperature and wind speed
  tempEl.textContent = temperature;
  windSpeedEl.textContent = windSpeed;

  // Check conditions for wind chill calculation (metric)
  if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillEl.textContent = chill.toFixed(1) + " °C";
  } else {
    windChillEl.textContent = "N/A";
  }

  // Footer date info
  const today = new Date();
  yearEl.textContent = today.getFullYear();
  lastModifiedEl.textContent = document.lastModified;
});
