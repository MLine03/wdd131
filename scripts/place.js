document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.getElementById("temp").textContent);
  const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
  const windChillElement = document.getElementById("windChill");

  function calculateWindChill(t, s) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(s, 0.16) +
      0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
  }

  if (temp <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = `${chill} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }

  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
