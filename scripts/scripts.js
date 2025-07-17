function calculateWindChill(tempF, speed) {
  return (
    35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) +
    0.4275 * tempF * Math.pow(speed, 0.16)
  ).toFixed(1);
}

document.addEventListener('DOMContentLoaded', () => {
  const temp = parseFloat(document.getElementById('temp').textContent);
  const speed = parseFloat(document.getElementById('speed').textContent);
  const chillSpan = document.getElementById('chill');

  let chill = 'N/A';
  if (temp <= 50 && speed > 3) {
    chill = calculateWindChill(temp, speed) + ' °F';
  }

  chillSpan.textContent = chill;

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('modified').textContent = document.lastModified;
});
