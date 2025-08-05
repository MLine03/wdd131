// Flavor of the Day Feature
const flavorOfTheDay = [
    "Laie Breeze", 
    "Hukilau Dream", 
    "Sunset Swell", 
    "Sunshine Girl", 
    "Aloha Fizz", 
    "Lilikoi Fizz"
];

// Randomly select the flavor of the day
const flavorElement = document.getElementById('flavor-of-the-day');
flavorElement.innerHTML = `Today's Flavor of the Day is: ${flavorOfTheDay[Math.floor(Math.random() * flavorOfTheDay.length)]}`;

// Save Favorite Soda to LocalStorage
const favoriteButton = document.getElementById('save-favorite-button');
const favoriteSodaElement = document.getElementById('favorite-soda');

favoriteButton.addEventListener('click', () => {
    const favoriteSoda = prompt("Enter the name of your favorite soda:");
    if (favoriteSoda) {
        localStorage.setItem('favoriteSoda', favoriteSoda);
        favoriteSodaElement.innerHTML = `Your favorite soda is: ${favoriteSoda}`;
    }
});

// Check if user has a saved favorite soda
const savedFavoriteSoda = localStorage.getItem('favoriteSoda');
if (savedFavoriteSoda) {
    favoriteSodaElement.innerHTML = `Your favorite soda is: ${savedFavoriteSoda}`;
} else {
    favoriteSodaElement.innerHTML = "You have not saved a favorite soda yet.";
}

// Example Contact Form Validation (just a basic one)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        event.preventDefault();
        alert("Please fill in all the fields!");
    }
});
