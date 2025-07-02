// Dynamically set the copyright year
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Dynamically set the last modified date
const lastModifiedPara = document.getElementById('lastModified');
if (lastModifiedPara) {
  lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
}
