// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById('lastModified').textContent = document.lastModified;

// Static values matching the displayed weather info
const temperatureC = 7;      // Celsius
const windSpeedKmh = 10;     // km/h

// Calculate wind chill based on Metric units formula
// Formula valid if temp <= 10°C and windSpeed > 4.8 km/h
function calculateWindChill(tempC, windKmh) {
    return (
        13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
}

// Calculate and display wind chill or N/A if conditions not met
function displayWindChill() {
    let windChillText = "N/A";

    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        windChillText = calculateWindChill(temperatureC, windSpeedKmh) + "°C";
    }

    document.getElementById('windChill').textContent = windChillText;
}

window.addEventListener('load', displayWindChill);
