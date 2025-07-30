// Data: soda flavors
const sodaFlavors = [
  {
    name: "Pineapple Paradise",
    description: "Sweet and tangy pineapple soda with a hint of coconut.",
    image: "https://images.unsplash.com/photo-1505253210343-40e3be9d8d41?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Mango Mana",
    description: "Rich mango soda bursting with tropical sweetness and power.",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Tiki Twist",
    description: "A zesty mix of passionfruit and lime, inspired by traditional Polynesian drinks.",
    image: "https://images.unsplash.com/photo-1505253210354-2b5e7962f7e6?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Coconut Breeze",
    description: "Refreshing coconut soda that transports you to the islands.",
    image: "https://images.unsplash.com/photo-1505253210345-3f4eb5387e4f?auto=format&fit=crop&w=400&q=80"
  }
];

// For index.html flavor rotation
if (document.getElementById('flavor-container')) {
  let currentIndex = 0;

  const img = document.getElementById('flavor-img');
  const nameEl = document.getElementById('flavor-name');
  const descEl = document.getElementById('flavor-desc');
  const nextBtn = document.getElementById('next-flavor');

  function showFlavor(index) {
    const flavor = sodaFlavors[index];
    img.src = flavor.image;
    img.alt = flavor.name;
    nameEl.textContent = flavor.name;
    descEl.textContent = flavor.description;
  }

  showFlavor(currentIndex);

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sodaFlavors.length;
    showFlavor(currentIndex);
  });
}

// For menu.html favorites
if (document.getElementById('soda-list')) {
  const sodaList = document.getElementById('soda-list');
  const favoriteList = document.getElementById('favorite-list');

  // Load favorites from localStorage
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  function updateFavoritesUI() {
    favoriteList.innerHTML = '';
    if (favorites.length === 0) {
      favoriteList.innerHTML = '<li>No favorites selected yet.</li>';
      return;
    }
    favorites.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      favoriteList.appendChild(li);
    });
  }

  function toggleFavorite(flavorName) {
    const index = favorites.indexOf(flavorName);
    if (index === -1) {
      favorites.push(flavorName);
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesUI();
    updateButtons();
  }

  function updateButtons() {
    // Disable button and change text for favorites
    document.querySelectorAll('button.favorite-btn').forEach(btn => {
      const name = btn.dataset.name;
      if (favorites.includes(name)) {
        btn.textContent = "Remove Favorite";
        btn.classList.add('active');
      } else {
        btn.textContent = "Add Favorite";
        btn.classList.remove('active');
      }
    });
  }

  // Populate soda list with buttons
  sodaFlavors.forEach(flavor => {
    const li = document.createElement('li');
    li.textContent = flavor.name;

    const btn = document.createElement('button');
    btn.textContent = "Add Favorite";
    btn.className = 'favorite-btn';
    btn.dataset.name = flavor.name;

    btn.addEventListener('click', () => toggleFavorite(flavor.name));

    li.appendChild(btn);
    sodaList.appendChild(li);
  });

  updateFavoritesUI();
  updateButtons();
}
