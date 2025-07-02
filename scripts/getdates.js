// Set the current year dynamically in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Display the last modified date of the document
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
