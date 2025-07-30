// Product list with sodas, snacks, and desserts
const products = [
  // Sodas
  {
    type: "Soda",
    name: "Pineapple Paradise",
    description: "Sweet and tangy pineapple soda with a hint of coconut.",
    image: "https://images.unsplash.com/photo-1505253210343-40e3be9d8d41?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Soda",
    name: "Mango Mana",
    description: "Rich mango soda bursting with tropical sweetness and power.",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Soda",
    name: "Tiki Twist",
    description: "A zesty mix of passionfruit and lime, inspired by traditional Polynesian drinks.",
    image: "https://images.unsplash.com/photo-1505253210354-2b5e7962f7e6?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Soda",
    name: "Coconut Breeze",
    description: "Refreshing coconut soda that transports you to the islands.",
    image: "https://images.unsplash.com/photo-1505253210345-3f4eb5387e4f?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Soda",
    name: "Lihing Mui Juice",
    description: "A traditional sweet and tangy plum juice soda loved in Hawaii.",
    image: "https://images.unsplash.com/photo-1590080877777-9816d624a8b4?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Soda",
    name: "Lilikoi Passionfruit",
    description: "Tart and sweet passionfruit soda bursting with tropical flavor.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Soda",
    name: "Guava Breeze",
    description: "Smooth guava soda with a refreshing island twist.",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80"
  },

  // Snacks
  {
    type: "Snack",
    name: "Classic Macadamia Cookie",
    description: "Crunchy and buttery cookies loaded with premium macadamia nuts.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Snack",
    name: "Chocolate Macadamia Cookie",
    description: "Classic cookie with chunks of rich chocolate and macadamia nuts.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Snack",
    name: "Coco Puffs",
    description: "Delicious coconut-flavored puffs, light and crunchy with a tropical twist.",
    image: "https://images.unsplash.com/photo-1580910051073-8dfbbbe17b7a?auto=format&fit=crop&w=400&q=80"
  },

  // Desserts
  {
    type: "Dessert",
    name: "Traditional Haupia",
    description: "Creamy coconut pudding, a classic Polynesian dessert.",
    image: "https://images.unsplash.com/photo-1543779506-cfe73f77f9fa?auto=format&fit=crop&w=400&q=80"
  },
  {
    type: "Dessert",
    name: "Haupia Pie",
    description: "Delicious pie filled with smooth haupia and a crispy crust.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
  }
];

// --- Homepage Flavor of the Day Rotation ---
if (document.getElementById('flavor-container')) {
  let currentIndex = 0;

  const img = document.getElementById('flavor-img');
  const nameEl = document.getElementById('flavor-name');
  const descEl = document.getElementById('flavor-desc');
  const nextBtn = document.getElementById('next-flavor');

  // Filter sodas only for flavor of the day rotation
  const sodaProducts = products.filter(p => p.type === "Soda");

  function showFlavor(index) {
    const product = sodaProducts[index];
    img.src = product.image;
    img.alt = product.name + " image";
    nameEl.textContent = product.name;
    descEl.textContent = product.description;
  }

  showFlavor(currentIndex);

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sodaProducts.length;
    showFlavor(currentIndex);
  });
}

// --- Menu page product rendering and favorites ---
if (document.getElementById('soda-list')) {
  const sodaListEl = document.getElementById('soda-list');
  const favListEl = document.getElementById('favorite-list');

  // Load favorites from localStorage or initialize empty array
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  // Render all products as list items with "Add/Remove Favorite" buttons
  function renderProducts() {
    sodaListEl.innerHTML = '';
    products.forEach((product, index) => {
      const li = document.createElement('li');

      li.innerHTML = `
        <div>
          <strong>${product.name}</strong> <em>(${product.type})</em><br/>
          <small>${product.description}</small>
        </div>
        <button class="favorite-btn" data-index="${index}">
          ${favorites.includes(product.name) ? "Remove Favorite" : "Add Favorite"}
        </button>
      `;

      sodaListEl.appendChild(li);
    });

    // Attach event listeners for favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(button => {
      button.addEventListener('click', () => {
        const idx = Number(button.getAttribute('data-index'));
        const productName = products[idx].name;

        if (favorites.includes(productName)) {
          favorites = favorites.filter(name => name !== productName);
        } else {
          favorites.push(productName);
        }

        saveFavorites();
        renderProducts();
        renderFavorites();
      });
    });
  }

  // Render favorite products list
  function renderFavorites() {
    favListEl.innerHTML = '';
    if (favorites.length === 0) {
      favListEl.innerHTML = '<li>No favorites selected yet.</li>';
      return;
    }
    favorites.forEach(favName => {
      const product = products.find(p => p.name === favName);
      if (product) {
        const li = document.createElement('li');
        li.textContent = `${product.name} (${product.type})`;
        favListEl.appendChild(li);
      }
    });
  }

  renderProducts();
  renderFavorites();
}
