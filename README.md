# Filtered Temple Picture Album

## Overview
This project is an enhanced webpage featuring an interactive gallery of LDS temples. Users can filter temples based on location categories. Temple images are lazy-loaded for performance, and the page is fully responsive and accessible.

## Features
- Dynamically generated temple cards from a JavaScript array of temple objects
- Filtering functionality by temple location using a dropdown menu
- Lazy loading for all temple images (`loading="lazy"`)
- Responsive layout using CSS Grid and Flexbox
- Accessible navigation with clear focus and hover states
- Clean, semantic HTML5 structure
- External CSS and JavaScript files for separation of concerns
- Google Fonts integrated properly via HTML `<link>` (no `@import` in CSS)
- Footer displays last modified date dynamically via JavaScript

## Validation and Compliance
- HTML validated with zero errors using [W3C HTML Validator](https://validator.w3.org/)
- CSS validated with zero errors using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- No embedded or inline styles present
- Uses proper DOCTYPE and lang attribute in HTML
- Script tag uses `defer` for non-blocking loading
- Passes accessibility and best practice audits in Chrome DevTools Lighthouse (mobile and desktop)

## How to View
1. Clone or download the repository.
2. Open `filtered-temples.html` in a modern web browser.
3. Use the dropdown filter to view temples by location.
4. Images load lazily as you scroll.

## Author
Meline

---

If you have any questions or feedback, feel free to reach out.

