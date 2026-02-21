/* =============================================
   TASK 3: UPDATED DATA STRUCTURE
   - images[]  : multiple property photos
   - reviews[] : array of user review objects
   - reviewCount replaced by reviews.length
============================================= */
const COUNTRIES = [
  { code: "PAKISTAN",     label: "Pakistan",              flag: "🇵🇰" },
  { code: "CANADA",       label: "Canada",                flag: "🇨🇦" },
  { code: "USA",          label: "United States",         flag: "🇺🇸" },
  { code: "UAE",          label: "United Arab Emirates",  flag: "🇦🇪" },
  { code: "UK",           label: "United Kingdom",        flag: "🇬🇧" },
  { code: "INDONESIA",    label: "Indonesia",             flag: "🇮🇩" },
  { code: "SOUTH_AFRICA", label: "South Africa",          flag: "🇿🇦" },
  { code: "SAUDI_ARABIA", label: "Saudi Arabia",          flag: "🇸🇦" },
  { code: "AUSTRALIA",    label: "Australia",             flag: "🇦🇺" },
  { code: "NEW_ZEALAND",  label: "New Zealand",           flag: "🇳🇿" },
  { code: "EU",           label: "European Union",        flag: "🇪🇺" }
];

/* ---- Property Listings (expanded data) ---- */
const LISTINGS = [
  {
    id: "1",
    title: "Luxury Apartment in Downtown Dubai",
    location: "Dubai, UAE",
    price: 250,
    rating: 4.9,
    description: "A glass-wrapped luxury suite with panoramic views of the Burj Khalifa and the Dubai Fountain. Featuring floor-to-ceiling windows, a private infinity pool terrace, and concierge service 24/7.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900",
      "https://images.unsplash.com/photo-1556909114-44e3e9699e2b?w=900"
    ],
    reviews: [
      { author: "Sarah K.",   rating: 5, date: "December 2024", comment: "Absolutely breathtaking! The views of Burj Khalifa were surreal. The host was incredibly attentive and the apartment was spotless." },
      { author: "James T.",   rating: 5, date: "November 2024", comment: "The infinity pool terrace made our honeymoon unforgettable. Would return every single year." },
      { author: "Aisha M.",   rating: 5, date: "October 2024",  comment: "Impeccable design, premium finishes, and the location couldn't be better. 10/10." },
      { author: "Carlos R.",  rating: 4, date: "September 2024",comment: "Stunning apartment, minor delay with check-in but otherwise a perfect stay." }
    ]
  },
  {
    id: "2",
    title: "Modern Loft in Manhattan",
    location: "New York, USA",
    price: 320,
    description: "Ultra-minimal SoHo loft with double-height windows, exposed brick, and a private rooftop terrace overlooking the Hudson River. Walking distance to world-class dining and galleries.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=900",
      "https://images.unsplash.com/photo-1556909114-44e3e9699e2b?w=900",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900"
    ],
    reviews: [
      { author: "Emma L.",    rating: 5, date: "January 2025",  comment: "New York City at its finest. The rooftop sunset views were jaw-dropping. Highly recommend!" },
      { author: "Michael P.", rating: 4, date: "December 2024", comment: "Great location, spacious, and very stylish. Noise from the street at night but earplugs were provided." },
      { author: "Yuki S.",    rating: 5, date: "November 2024", comment: "Everything was perfect. The host left great restaurant recommendations too." }
    ]
  },
  {
    id: "3",
    title: "Beachfront Villa in Sydney",
    location: "Sydney, Australia",
    price: 450,
    rating: 5.0,
    description: "Wake up to the sound of waves in this stunning beachfront villa with direct access to Bondi Beach. Features a private deck, outdoor shower, and breathtaking Sydney Harbour views.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900"
    ],
    reviews: [
      { author: "Olivia H.",  rating: 5, date: "February 2025", comment: "The most magical place I've ever stayed. Falling asleep to the ocean waves was a dream come true." },
      { author: "Liam B.",    rating: 5, date: "January 2025",  comment: "Absolutely perfect. The private beach access was extraordinary. We didn't want to leave!" },
      { author: "Sophie C.",  rating: 5, date: "December 2024", comment: "Flawless in every way. The host anticipates everything. Sunrise from the deck – chef's kiss." }
    ]
  },
  {
    id: "4",
    title: "Historic Apartment in London",
    location: "London, UK",
    price: 280,
    rating: 4.7,
    description: "A converted Victorian warehouse loft with exposed beams, floor-to-ceiling windows overlooking the Thames, and original period features combined with modern luxury amenities.",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900",
      "https://images.unsplash.com/photo-1560185127-6a5a884b6547?w=900",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=900"
    ],
    reviews: [
      { author: "Charlotte W.", rating: 5, date: "January 2025",  comment: "Pure London character. The Thames view is unbeatable. I could have spent all day just reading by the window." },
      { author: "Noah A.",      rating: 4, date: "December 2024", comment: "Wonderful historic flat. The neighbourhood is fantastic. Slightly difficult to find parking." },
      { author: "Isabella F.",  rating: 5, date: "November 2024", comment: "Charming, well-equipped, and perfectly located. The host was responsive and lovely." }
    ]
  },
  {
    id: "5",
    title: "Mountain View Chalet in Islamabad",
    location: "Islamabad, Pakistan",
    price: 120,
    rating: 4.9,
    description: "A sun-drenched chalet overlooking the Margalla Hills with a private plunge pool, lush gardens, and panoramic mountain views. The perfect blend of luxury and nature.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900"
    ],
    reviews: [
      { author: "Fatima Z.",  rating: 5, date: "January 2025",  comment: "Serene, beautiful, and incredibly peaceful. The Margalla Hills at sunrise from the pool was magical." },
      { author: "Hassan R.",  rating: 5, date: "December 2024", comment: "The best stay I've had in Pakistan. Impeccable hospitality and stunning views." },
      { author: "Nadia S.",   rating: 5, date: "November 2024", comment: "Felt like a 5-star resort in the mountains. Perfect for a family retreat." }
    ]
  },
  {
    id: "6",
    title: "Coastal Retreat in Cape Town",
    location: "Cape Town, South Africa",
    price: 180,
    rating: 4.8,
    description: "A dramatic cliffside villa with Table Mountain as your backdrop and the Atlantic Ocean at your feet. Features a heated infinity pool, private chef option, and sunset lounging deck.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900"
    ],
    reviews: [
      { author: "Amara D.",   rating: 5, date: "February 2025", comment: "Table Mountain from the infinity pool – nothing compares. Absolutely stunning villa." },
      { author: "Ethan J.",   rating: 5, date: "January 2025",  comment: "Best place I've ever stayed. The sunset over the ocean from the deck was unbelievable." },
      { author: "Leila M.",   rating: 4, date: "December 2024", comment: "Gorgeous property with incredible views. The private chef option elevated the whole experience." }
    ]
  }
];

/* =============================================
   TASK 2: LOCATION IMAGES MAP
   Famous landmark/spot images per country.
============================================= */
const LOCATION_IMAGES = {
  UAE: [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",  // Dubai Burj Khalifa night
    "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=900",  // Dubai Marina
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900",  // Desert dunes
    "https://images.unsplash.com/photo-1548254559-eab9c2e72a59?w=900",    // Palm Jumeirah aerial
    "https://images.unsplash.com/photo-1617634975524-c9cc9e7e9144?w=900", // Burj Al Arab
    "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=900"  // Dubai Frame / skyline
  ],
  USA: [
    "https://images.unsplash.com/photo-1485871981521-5b1fd3805785?w=900", // NYC Times Square
    "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900", // Golden Gate Bridge
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900", // Grand Canyon
    "https://images.unsplash.com/photo-1553901753-215db344677a?w=900",    // NYC Skyline
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900", // Statue of Liberty
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900"  // Chicago Architecture
  ],
  AUSTRALIA: [
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900", // Sydney Opera House
    "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=900", // Great Barrier Reef
    "https://images.unsplash.com/photo-1527494397072-c2b8a2dd1fa3?w=900", // Harbour Bridge
    "https://images.unsplash.com/photo-1531889954489-af8872d64252?w=900", // Uluru
    "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=900",    // Bondi Beach
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900"  // Blue Mountains
  ],
  UK: [
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900", // London Tower Bridge
    "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=900", // Big Ben
    "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=900", // Buckingham Palace
    "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=900", // Scottish Highlands
    "https://images.unsplash.com/photo-1543832923-44667a44c804?w=900",    // London Eye
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=900"  // Oxford
  ],
  PAKISTAN: [
    "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=900", // Badshahi Mosque
    "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=900", // Hunza Valley
    "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=900", // K2 Mountains
    "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=900",    // Lahore Fort
    "https://images.unsplash.com/photo-1573142959-4f2e4bfb6767?w=900",    // Skardu lake
    "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900"  // Islamabad landscape
  ],
  SOUTH_AFRICA: [
    "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900", // Table Mountain
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900",    // Cape Point
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=900", // Cape Town waterfront
    "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=900", // Safari / Savanna
    "https://images.unsplash.com/photo-1565620551738-9ba2e9b80d85?w=900", // Stellenbosch winery
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900"  // Kruger Park wildlife
  ],
  CANADA: [
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900", // Niagara Falls
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900", // Banff National Park
    "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?w=900",    // CN Tower Toronto
    "https://images.unsplash.com/photo-1562774053-701939374585?w=900",    // Vancouver skyline
    "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=900", // Northern Lights
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900"  // Quebec City
  ],
  INDONESIA: [
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900", // Bali Rice Terraces
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900",    // Borobudur Temple
    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=900",    // Komodo Island
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900", // Raja Ampat
    "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=900", // Bali temple
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900"  // Indonesian beach
  ],
  SAUDI_ARABIA: [
    "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=900", // Mecca / Kaaba area
    "https://images.unsplash.com/photo-1622188028200-8f04c14a0394?w=900", // Al-Ula desert
    "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=900", // Riyadh skyline
    "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=900", // Hegra ruins
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=900", // Edge of the World
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900"  // Arabian architecture
  ],
  NEW_ZEALAND: [
    "https://images.unsplash.com/photo-1469521669194-babb45599def?w=900", // Milford Sound
    "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=900", // Mount Cook
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900", // Fiordland
    "https://images.unsplash.com/photo-1581888227599-779811939961?w=900", // Rotorua geothermal
    "https://images.unsplash.com/photo-1504681086902-4e55fae2ade1?w=900", // Hobbiton fields
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900"     // NZ coastline
  ],
  EU: [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900", // Eiffel Tower Paris
    "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=900", // Colosseum Rome
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900", // Santorini Greece
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900", // Amsterdam canals
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900", // Prague Castle
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900"  // Barcelona Sagrada Familia
  ]
};

/* =============================================
   STATE
============================================= */
let currentStep = 1;
let guestCount = 1;
const GUEST_MIN = 1;
const GUEST_MAX = 10;
const likedListings = new Set();
let lightboxImages = [];
let lightboxIndex  = 0;

let propertyData = {
  title: "", type: "", location: "", price: "",
  bedrooms: "", bathrooms: "", guests: "", description: "", images: []
};

/* =============================================
   INIT
============================================= */
document.addEventListener("DOMContentLoaded", () => {
  initializeCountryFlags();
  showSkeletons();
  setTimeout(() => renderListings(LISTINGS), 900);

  setupImageUpload();
  setupDateInputs();
  setupGuestCounter();
  setupDetailModal();
  setupLightbox();

  // Search button
  document.getElementById("search-btn").addEventListener("click", () => {
    const dest = document.getElementById("destination-input").value.trim();
    showToast(
      dest ? `Searching "${dest}"` : "Searching all destinations",
      "Finding your perfect stay…",
      "info"
    );
  });

  // Close property-form modal on overlay click
  document.getElementById("property-modal").addEventListener("click", (e) => {
    if (e.target.id === "property-modal") closePropertyModal();
  });
});

/* =============================================
   COUNTRY FLAGS
============================================= */
function initializeCountryFlags() {
  const container = document.getElementById("country-flags-container");
  container.innerHTML = "";

  COUNTRIES.forEach((country, i) => {
    const item = document.createElement("div");
    item.className = "country-flag-item";
    item.style.animationDelay = `${i * 40}ms`;
    item.dataset.code = country.code;
    item.innerHTML = `
      <div class="country-flag-circle">
        <span class="flag-icon">${country.flag}</span>
      </div>
      <span class="country-flag-name">${country.label}</span>
    `;
    item.addEventListener("click", () => handleCountryFilter(country.code, item));
    container.appendChild(item);
  });
}

function handleCountryFilter(code, clickedEl) {
  const allItems = document.querySelectorAll(".country-flag-item");
  const isAlreadyActive = clickedEl.classList.contains("active");

  allItems.forEach(el => {
    el.classList.remove("active");
    el.classList.add("fade-out");
    setTimeout(() => el.classList.remove("fade-out"), 200);
  });

  if (!isAlreadyActive) {
    clickedEl.classList.add("active");
    clickedEl.classList.add("fade-in");
    setTimeout(() => clickedEl.classList.remove("fade-in"), 350);
  }

  // Fade out grid
  const grid = document.getElementById("listings-grid");
  grid.style.transition = "opacity 0.2s";
  grid.style.opacity = "0";

  // TASK 2: Update location background collage
  updateLocationBackground(isAlreadyActive ? null : code);

  setTimeout(() => {
    const countryMap = {
      UAE: "UAE", USA: "USA", UK: "UK", AUSTRALIA: "Australia",
      PAKISTAN: "Pakistan", SOUTH_AFRICA: "South Africa",
      CANADA: "Canada", INDONESIA: "Indonesia",
      SAUDI_ARABIA: "Saudi", NEW_ZEALAND: "New Zealand", EU: "EU"
    };

    const filtered = isAlreadyActive
      ? LISTINGS
      : LISTINGS.filter(l => l.location.includes(countryMap[code] || code));

    renderListings(filtered);
    grid.style.opacity = "1";
  }, 200);
}

/* =============================================
   TASK 2: LOCATION BACKGROUND COLLAGE
============================================= */
function updateLocationBackground(countryCode) {
  const collage = document.getElementById("location-bg-collage");

  // Fade out
  collage.classList.remove("visible");
  collage.classList.add("fade-change");

  setTimeout(() => {
    collage.innerHTML = "";
    collage.classList.remove("fade-change");

    if (!countryCode || !LOCATION_IMAGES[countryCode]) {
      // No country selected — hide collage
      return;
    }

    const imgs = LOCATION_IMAGES[countryCode];
    // Show up to 6 images in the 3×2 grid
    imgs.slice(0, 6).forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Famous spot ${i + 1}`;
      img.className = "location-bg-img";
      img.loading = "lazy";
      collage.appendChild(img);
    });

    // Fade in after a tiny delay so images start loading
    requestAnimationFrame(() => {
      requestAnimationFrame(() => collage.classList.add("visible"));
    });
  }, 350);
}

/* =============================================
   SKELETON LOADERS
============================================= */
function showSkeletons(count = 6) {
  const grid = document.getElementById("listings-grid");
  grid.innerHTML = "";
  for (let i = 0; i < count; i++) {
    grid.innerHTML += `
      <div class="skeleton-card">
        <div class="skeleton skeleton-image"></div>
        <div class="listing-info" style="padding:12px 16px 0;">
          <div class="skeleton skeleton-line title" style="margin:0 0 8px;"></div>
          <div class="skeleton skeleton-line medium" style="margin:0;"></div>
        </div>
        <div class="skeleton-footer">
          <div class="skeleton skeleton-price"></div>
          <div class="skeleton skeleton-reviews"></div>
        </div>
      </div>
    `;
  }
}

/* =============================================
   RENDER LISTINGS
============================================= */
function renderListings(data = LISTINGS) {
  const grid   = document.getElementById("listings-grid");
  const countEl = document.getElementById("listing-count");
  grid.innerHTML = "";

  if (countEl) countEl.textContent = data.length;

  if (data.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="fas fa-search"></i></div>
        <h3>No stays found</h3>
        <p>We couldn't find any properties matching your filter. Try a different destination.</p>
        <button class="empty-state-btn btn-pressable" onclick="resetFilters()">
          <i class="fas fa-refresh"></i> Reset Filters
        </button>
      </div>
    `;
    return;
  }

  data.forEach((listing, i) => grid.appendChild(createListingCard(listing, i)));
}

/* =============================================
   LISTING CARD
   Clicking card body (not heart) opens detail modal.
============================================= */
function createListingCard(listing, index = 0) {
  const card = document.createElement("div");
  card.className = "listing-card";
  card.style.animationDelay = `${index * 60}ms`;

  const isLiked     = likedListings.has(listing.id);
  const coverImg    = listing.images[0];
  const reviewCount = listing.reviews.length;

  card.innerHTML = `
    <div class="listing-image-container">
      <img src="${coverImg}" alt="${listing.title}" class="listing-image" loading="lazy" />
      <button
        class="listing-heart-btn${isLiked ? " liked" : ""}"
        data-id="${listing.id}"
        aria-label="${isLiked ? "Remove from favorites" : "Add to favorites"}"
      >
        <i class="${isLiked ? "fas" : "far"} fa-heart"></i>
      </button>
    </div>
    <div class="listing-info">
      <h3 class="listing-title">${listing.title}</h3>
      <p class="listing-location">${listing.location}</p>
      <div class="listing-rating">
        <i class="fas fa-star"></i>
        <span>${listing.rating.toFixed(1)}</span>
      </div>
    </div>
    <div class="listing-footer">
      <div class="listing-price">
        <span class="listing-price-amount">$${listing.price}</span>
        <span class="listing-price-unit">/ night</span>
      </div>
      <span class="listing-reviews">${reviewCount} reviews</span>
    </div>
  `;

  // Heart button — stop propagation so card click doesn't fire
  const heartBtn = card.querySelector(".listing-heart-btn");
  heartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleHeart(listing, heartBtn);
  });

  // TASK 1: clicking anywhere on the card opens the detail modal
  card.addEventListener("click", () => openDetailModal(listing));

  return card;
}

/* =============================================
   HEART TOGGLE
============================================= */
function toggleHeart(listing, btn) {
  const isLiked = likedListings.has(listing.id);
  btn.classList.remove("heart-pop");
  void btn.offsetWidth;
  btn.classList.add("heart-pop");

  if (isLiked) {
    likedListings.delete(listing.id);
    btn.classList.remove("liked");
    btn.querySelector("i").className = "far fa-heart";
    btn.setAttribute("aria-label", "Add to favorites");
    showToast("Removed from Favorites", listing.title, "info");
  } else {
    likedListings.add(listing.id);
    btn.classList.add("liked");
    btn.querySelector("i").className = "fas fa-heart";
    btn.setAttribute("aria-label", "Remove from favorites");
    showToast("Added to Favorites ❤️", listing.title, "heart");
  }

  btn.addEventListener("animationend", () => btn.classList.remove("heart-pop"), { once: true });
}

/* =============================================
   TASK 1: PROPERTY DETAIL MODAL
============================================= */
function setupDetailModal() {
  // Close on overlay click
  const overlay = document.getElementById("detail-modal");
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeDetailModal();
  });

  // Close button
  document.getElementById("detail-close-btn").addEventListener("click", closeDetailModal);

  // Keyboard close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailModal();
      closeLightbox();
    }
  });
}

function openDetailModal(listing) {
  const overlay = document.getElementById("detail-modal");

  // Populate header
  document.getElementById("detail-title").textContent    = listing.title;
  document.getElementById("detail-location").textContent = listing.location;
  document.getElementById("detail-rating").textContent   = listing.rating.toFixed(1);
  document.getElementById("detail-price").textContent    = `$${listing.price}`;
  document.getElementById("detail-description").textContent = listing.description || "A beautiful property awaiting your visit.";
  document.getElementById("detail-rating-big").textContent  = listing.rating.toFixed(2);
  document.getElementById("detail-review-count").textContent = listing.reviews.length;

  // Build image gallery
  buildGallery(listing.images);

  // Build reviews
  buildReviews(listing.reviews);

  // Show modal
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  document.getElementById("detail-modal").classList.remove("active");
  document.body.style.overflow = "";
}

/* --- Gallery Builder (Airbnb layout) --- */
function buildGallery(images) {
  const gallery = document.getElementById("detail-gallery");
  gallery.innerHTML = "";

  if (!images || images.length === 0) return;

  // Store for lightbox
  lightboxImages = images;

  // Main (large) image
  const main = document.createElement("div");
  main.className = "detail-gallery-main";
  main.innerHTML = `<img src="${images[0]}" alt="Property photo 1" loading="eager" />`;
  main.addEventListener("click", () => openLightbox(0));
  gallery.appendChild(main);

  // Up to 4 thumbnails on the right
  const thumbCount = Math.min(images.length - 1, 4);
  for (let i = 1; i <= thumbCount; i++) {
    const thumb = document.createElement("div");
    thumb.className = "detail-gallery-thumb";
    thumb.innerHTML = `<img src="${images[i]}" alt="Property photo ${i + 1}" loading="lazy" />`;

    // Show "view all" button on the last thumb if more photos exist
    if (i === thumbCount && images.length > 5) {
      thumb.innerHTML += `
        <button class="gallery-view-all" onclick="openLightbox(${i})">
          <i class="fas fa-images"></i> +${images.length - 5} photos
        </button>
      `;
    }

    const idx = i;
    thumb.addEventListener("click", () => openLightbox(idx));
    gallery.appendChild(thumb);
  }
}

/* --- Reviews Builder --- */
function buildReviews(reviews) {
  const grid = document.getElementById("detail-reviews-grid");
  grid.innerHTML = "";

  if (!reviews || reviews.length === 0) {
    grid.innerHTML = `<p style="color:var(--slate-400); font-size:14px;">No reviews yet.</p>`;
    return;
  }

  reviews.forEach((rev, i) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.style.animationDelay = `${i * 70}ms`;

    const initials = rev.author.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

    // Build star display
    const fullStars  = Math.floor(rev.rating);
    const emptyStars = 5 - fullStars;
    const starsHTML  = `
      ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
      ${'<i class="fas fa-star empty"></i>'.repeat(emptyStars)}
    `;

    card.innerHTML = `
      <div class="review-card-top">
        <div class="review-avatar">${initials}</div>
        <div class="review-author-block">
          <span class="review-author">${rev.author}</span>
          <span class="review-date">${rev.date}</span>
        </div>
      </div>
      <div class="review-stars">${starsHTML}</div>
      <p class="review-comment">"${rev.comment}"</p>
    `;

    grid.appendChild(card);
  });
}

/* =============================================
   LIGHTBOX (Full-screen photo viewer)
============================================= */
function setupLightbox() {
  // Inject lightbox HTML into body
  const lb = document.createElement("div");
  lb.className = "gallery-lightbox";
  lb.id = "gallery-lightbox";
  lb.innerHTML = `
    <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close lightbox">
      <i class="fas fa-times"></i>
    </button>
    <img class="lightbox-img" id="lightbox-img" src="" alt="Gallery photo" />
    <div class="lightbox-controls">
      <button class="lightbox-btn" onclick="lightboxNav(-1)" aria-label="Previous">
        <i class="fas fa-chevron-left"></i>
      </button>
      <span class="lightbox-counter" id="lightbox-counter">1 / 1</span>
      <button class="lightbox-btn" onclick="lightboxNav(1)" aria-label="Next">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `;
  document.body.appendChild(lb);

  // Close on overlay click
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
}

function openLightbox(index) {
  lightboxIndex = index;
  const lb = document.getElementById("gallery-lightbox");
  lb.classList.add("active");
  updateLightboxImage();
}

function closeLightbox() {
  document.getElementById("gallery-lightbox").classList.remove("active");
}

function lightboxNav(direction) {
  lightboxIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img     = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");
  img.src = lightboxImages[lightboxIndex];
  counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

/* =============================================
   TOAST SYSTEM
============================================= */
function showToast(title, message = "", type = "success") {
  const container = document.getElementById("toast-container");
  const iconMap = {
    success: '<i class="fas fa-check"></i>',
    heart:   '<i class="fas fa-heart"></i>',
    info:    '<i class="fas fa-compass"></i>'
  };

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon ${type}">${iconMap[type] || iconMap.info}</div>
    <div class="toast-body">
      <span class="toast-title">${title}</span>
      ${message ? `<span class="toast-msg">${message}</span>` : ""}
    </div>
    <button class="toast-close" aria-label="Dismiss">&times;</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => dismissToast(toast));
  container.appendChild(toast);
  setTimeout(() => dismissToast(toast), 3500);
}

function dismissToast(toast) {
  if (!toast.isConnected) return;
  toast.classList.add("toast-exit");
  toast.addEventListener("animationend", () => toast.remove(), { once: true });
}

/* =============================================
   GUEST COUNTER
============================================= */
function setupGuestCounter() { updateGuestUI(); }

function changeGuests(delta) {
  const next = guestCount + delta;
  if (next < GUEST_MIN || next > GUEST_MAX) return;
  guestCount = next;
  updateGuestUI();
}

function updateGuestUI() {
  document.getElementById("guests-display").textContent = guestCount;
  document.getElementById("guests-minus").disabled = guestCount <= GUEST_MIN;
  document.getElementById("guests-plus").disabled  = guestCount >= GUEST_MAX;
}

/* =============================================
   PROPERTY FORM MODAL (existing)
============================================= */
function openPropertyModal() {
  document.getElementById("property-modal").classList.add("active");
  currentStep = 1;
  updateModalStep();
}

function closePropertyModal() {
  document.getElementById("property-modal").classList.remove("active");
  currentStep = 1;
  propertyData = { title:"", type:"", location:"", price:"",
    bedrooms:"", bathrooms:"", guests:"", description:"", images:[] };
  updateModalStep();
  resetForm();
}

function nextStep() {
  if (validateCurrentStep() && currentStep < 4) {
    currentStep++;
    updateModalStep();
  }
}

function previousStep() {
  if (currentStep > 1) { currentStep--; updateModalStep(); }
}

function updateModalStep() {
  const totalSteps = 4;

  document.querySelectorAll(".progress-step").forEach((el, i) => {
    el.classList.toggle("active", i + 1 <= currentStep);
  });

  document.querySelectorAll(".progress-line").forEach((line, i) => {
    line.classList.toggle("filled", i + 1 < currentStep);
  });

  const fill = document.getElementById("modal-thin-progress-fill");
  if (fill) fill.style.width = `${(currentStep / totalSteps) * 100}%`;

  document.querySelectorAll(".modal-step").forEach((el, i) => {
    el.classList.toggle("active", i + 1 === currentStep);
  });

  document.getElementById("prev-btn").style.display   = currentStep > 1 ? "inline-flex" : "none";
  document.getElementById("next-btn").style.display   = currentStep < 4 ? "inline-flex" : "none";
  document.getElementById("submit-btn").style.display = currentStep === 4 ? "inline-flex" : "none";

  if (currentStep === 4) updateReviewSummary();
}

function validateCurrentStep() {
  const field = (id) => document.getElementById(id)?.value.trim();

  if (currentStep === 1) {
    if (!field("property-title") || !field("property-type") || !field("property-location") || !field("property-price")) {
      showToast("Missing fields", "Please fill in all required fields.", "info");
      shakeInvalidFields(["property-title","property-type","property-location","property-price"]);
      return false;
    }
    propertyData.title    = field("property-title");
    propertyData.type     = field("property-type");
    propertyData.location = field("property-location");
    propertyData.price    = field("property-price");
    return true;
  }

  if (currentStep === 2) {
    if (!field("property-bedrooms") || !field("property-bathrooms") || !field("property-guests") || !field("property-description")) {
      showToast("Missing fields", "Please fill in all required fields.", "info");
      shakeInvalidFields(["property-bedrooms","property-bathrooms","property-guests","property-description"]);
      return false;
    }
    propertyData.bedrooms    = field("property-bedrooms");
    propertyData.bathrooms   = field("property-bathrooms");
    propertyData.guests      = field("property-guests");
    propertyData.description = field("property-description");
    return true;
  }

  if (currentStep === 3) {
    if (propertyData.images.length === 0) {
      showToast("No photos added", "Upload at least one property image.", "info");
      return false;
    }
    return true;
  }

  return true;
}

function shakeInvalidFields(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el || el.value.trim()) return;
    el.style.borderColor = "var(--primary)";
    el.animate([
      { transform: "translateX(0)" }, { transform: "translateX(-6px)" },
      { transform: "translateX(6px)" }, { transform: "translateX(-4px)" },
      { transform: "translateX(0)" }
    ], { duration: 320, easing: "ease-out" });
    el.addEventListener("input", () => el.style.borderColor = "", { once: true });
  });
}

function updateReviewSummary() {
  const typeLabels = { apartment: "Apartment", house: "House", villa: "Villa", condo: "Condo" };
  document.getElementById("review-summary").innerHTML = [
    ["Title",           propertyData.title],
    ["Type",            typeLabels[propertyData.type] || propertyData.type],
    ["Location",        propertyData.location],
    ["Price per Night", `$${propertyData.price}`],
    ["Bedrooms",        propertyData.bedrooms],
    ["Bathrooms",       propertyData.bathrooms],
    ["Max Guests",      propertyData.guests],
    ["Photos",          `${propertyData.images.length} uploaded`]
  ].map(([label, value]) => `
    <div class="review-item">
      <span class="review-item-label">${label}</span>
      <span class="review-item-value">${value}</span>
    </div>
  `).join("");
}

function resetForm() {
  ["property-title","property-type","property-location","property-price",
   "property-bedrooms","property-bathrooms","property-guests","property-description"]
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  propertyData.images = [];
  const uploadedEl = document.getElementById("uploaded-images");
  if (uploadedEl) uploadedEl.innerHTML = "";
}

function submitProperty() {
  showToast("Listing Submitted! 🎉", `"${propertyData.title}" is now under review.`, "success");
  closePropertyModal();
}

/* =============================================
   IMAGE UPLOAD (property form)
============================================= */
function setupImageUpload() {
  const input = document.getElementById("image-input");
  input.addEventListener("change", (e) => {
    Array.from(e.target.files).forEach(file => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        propertyData.images.push(ev.target.result);
        renderUploadedImages();
      };
      reader.readAsDataURL(file);
    });
    input.value = "";
  });

  const area = document.querySelector(".upload-placeholder");
  if (area) {
    area.addEventListener("dragover", (e) => { e.preventDefault(); area.style.borderColor = "var(--primary)"; });
    area.addEventListener("dragleave", () => { area.style.borderColor = ""; });
    area.addEventListener("drop", (e) => {
      e.preventDefault();
      area.style.borderColor = "";
      Array.from(e.dataTransfer.files).forEach(file => {
        if (!file.type.startsWith("image/")) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          propertyData.images.push(ev.target.result);
          renderUploadedImages();
        };
        reader.readAsDataURL(file);
      });
    });
  }
}

function removeImage(index) {
  propertyData.images.splice(index, 1);
  renderUploadedImages();
}

function renderUploadedImages() {
  const container = document.getElementById("uploaded-images");
  container.innerHTML = "";
  propertyData.images.forEach((url, i) => {
    const item = document.createElement("div");
    item.className = "uploaded-image-item";
    item.innerHTML = `
      <img src="${url}" alt="Uploaded photo ${i + 1}" />
      <button class="remove-image" onclick="removeImage(${i})" aria-label="Remove photo">
        <i class="fas fa-times"></i>
      </button>
    `;
    container.appendChild(item);
  });
}

/* =============================================
   DATE INPUTS
============================================= */
function setupDateInputs() {
  const checkin  = document.getElementById("checkin-input");
  const checkout = document.getElementById("checkout-input");
  const today    = new Date().toISOString().split("T")[0];
  checkin.min  = today;
  checkout.min = today;
  checkin.addEventListener("change", () => {
    const d = new Date(checkin.value);
    d.setDate(d.getDate() + 1);
    checkout.min = d.toISOString().split("T")[0];
  });
}

/* =============================================
   RESET
============================================= */
function resetFilters() {
  document.querySelectorAll(".country-flag-item").forEach(el => el.classList.remove("active"));
  updateLocationBackground(null); // Hide collage on reset

  const grid = document.getElementById("listings-grid");
  grid.style.opacity = "0";
  setTimeout(() => {
    renderListings(LISTINGS);
    grid.style.transition = "opacity 0.3s";
    grid.style.opacity = "1";
  }, 150);

  window.scrollTo({ top: 0, behavior: "smooth" });
}
