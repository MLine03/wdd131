// Update year and last modified date in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }

  // Simple wind chill calculation example:
  const temp = parseFloat(document.getElementById("temp").textContent);
  const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
  const windChillSpan = document.getElementById("windChill");

  if (temp !== null && windSpeed !== null && windChillSpan) {
    let windChill = temp;

    if (temp <= 10 && windSpeed > 4.8) {
      windChill =
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16);
      windChill = windChill.toFixed(1);
    } else {
      windChill = "N/A";
    }

    windChillSpan.textContent = windChill;
  }
});
