// Data Constants
const COUNTRIES = [
  {
    code: "PAKISTAN",
    label: "Pakistan",
    vibe: "High Altitude & Urban Culture",
    icon: "fas fa-mountain",
    regions: [
      { code: "HUNZA", label: "Hunza (Northern)" },
      { code: "SKARDU", label: "Skardu (Northern)" },
      { code: "LAHORE", label: "Lahore (Urban)" },
      { code: "ISLAMABAD", label: "Islamabad (Urban)" }
    ]
  },
  {
    code: "UAE",
    label: "United Arab Emirates",
    vibe: "Luxury Skylines & Desert Culture",
    icon: "fas fa-building",
    regions: [
      { code: "DUBAI", label: "Dubai (Luxury)" },
      { code: "ABU_DHABI", label: "Abu Dhabi (Cultural)" },
      { code: "SHARJAH", label: "Sharjah" }
    ]
  },
  {
    code: "UK",
    label: "United Kingdom",
    vibe: "Metropolitan & Highlands Escapes",
    icon: "fas fa-landmark",
    regions: [
      { code: "LONDON", label: "London (Metropolitan)" },
      { code: "MANCHESTER", label: "Manchester (Metropolitan)" },
      { code: "SCOTLAND", label: "Scottish Highlands" }
    ]
  },
  {
    code: "USA",
    label: "United States",
    vibe: "Coasts & Iconic Skylines",
    icon: "fas fa-city",
    regions: [
      { code: "NYC", label: "New York City (East Coast)" },
      { code: "WEST_COAST", label: "West Coast" },
      { code: "HOTSPOTS", label: "Tourist Hotspots" }
    ]
  },
  {
    code: "AUSTRALIA",
    label: "Australia",
    vibe: "Coastal Cities & Western Wilds",
    icon: "fas fa-water",
    regions: [
      { code: "SYDNEY", label: "Sydney (Coastal)" },
      { code: "GOLD_COAST", label: "Gold Coast (Coastal)" },
      { code: "PERTH", label: "Perth (Western Australia)" }
    ]
  }
];

const LISTINGS = [
  {
    id: "pk-hunza-01",
    title: "Cliffside Glass Chalet",
    country: "PAKISTAN",
    region: "HUNZA",
    locationLabel: "Hunza, Pakistan",
    description: "Suspended over a valley with panoramic views of snow-capped peaks and terraced fields.",
    pricePerNight: 220,
    rating: 4.9,
    reviewCount: 126,
    images: ["hunza-1", "hunza-1b", "hunza-1c"],
    featured: true
  },
  {
    id: "pk-skardu-01",
    title: "Lakefront Stone Retreat",
    country: "PAKISTAN",
    region: "SKARDU",
    locationLabel: "Skardu, Pakistan",
    description: "Warm stone villa perched on a mirror-like alpine lake, ideal for stargazing nights.",
    pricePerNight: 195,
    rating: 4.8,
    reviewCount: 94,
    images: ["skardu-1", "skardu-1b"]
  },
  {
    id: "pk-lahore-01",
    title: "Heritage Haveli Loft",
    country: "PAKISTAN",
    region: "LAHORE",
    locationLabel: "Lahore, Pakistan",
    description: "Minimalist loft nested inside a restored Old City haveli with a private courtyard.",
    pricePerNight: 140,
    rating: 4.7,
    reviewCount: 81,
    images: ["lahore-1", "lahore-1b"]
  },
  {
    id: "pk-isb-01",
    title: "Margalla View Penthouse",
    country: "PAKISTAN",
    region: "ISLAMABAD",
    locationLabel: "Islamabad, Pakistan",
    description: "Sun-drenched penthouse overlooking the Margalla Hills with a private plunge pool.",
    pricePerNight: 180,
    rating: 4.85,
    reviewCount: 103,
    images: ["islamabad-1", "islamabad-1b"]
  },
  {
    id: "uae-dubai-01",
    title: "Skyline Infinity Suite",
    country: "UAE",
    region: "DUBAI",
    locationLabel: "Dubai, UAE",
    description: "Glass-wrapped suite with a floating infinity pool and uninterrupted Burj Khalifa views.",
    pricePerNight: 620,
    rating: 5.0,
    reviewCount: 212,
    images: ["dubai-1", "dubai-1b", "dubai-1c"],
    featured: true
  },
  {
    id: "uae-dubai-02",
    title: "Palm Jumeirah Beach Villa",
    country: "UAE",
    region: "DUBAI",
    locationLabel: "Dubai, UAE",
    description: "Private beachfront villa on the Palm with a sunken lounge and direct sea access.",
    pricePerNight: 780,
    rating: 4.95,
    reviewCount: 167,
    images: ["dubai-2", "dubai-2b"]
  },
  {
    id: "uae-abu-01",
    title: "Louvre Inspired Residence",
    country: "UAE",
    region: "ABU_DHABI",
    locationLabel: "Abu Dhabi, UAE",
    description: "Art-forward apartment minutes from the Louvre Abu Dhabi with curated local pieces.",
    pricePerNight: 430,
    rating: 4.9,
    reviewCount: 88,
    images: ["abudhabi-1", "abudhabi-1b"]
  },
  {
    id: "uae-shj-01",
    title: "Corniche Culture Loft",
    country: "UAE",
    region: "SHARJAH",
    locationLabel: "Sharjah, UAE",
    description: "Bright loft along the Corniche blending museum-district calm with waterfront views.",
    pricePerNight: 260,
    rating: 4.6,
    reviewCount: 54,
    images: ["sharjah-1"]
  },
  {
    id: "uk-lon-01",
    title: "Thames View Atelier",
    country: "UK",
    region: "LONDON",
    locationLabel: "London, United Kingdom",
    description: "Converted warehouse atelier with floor-to-ceiling windows over the River Thames.",
    pricePerNight: 510,
    rating: 4.93,
    reviewCount: 201,
    images: ["london-1", "london-1b"],
    featured: true
  },
  {
    id: "uk-man-01",
    title: "Canal-Side Loft Studio",
    country: "UK",
    region: "MANCHESTER",
    locationLabel: "Manchester, United Kingdom",
    description: "Industrial-chic loft in a historic mill with exposed brick and canal views.",
    pricePerNight: 280,
    rating: 4.8,
    reviewCount: 77,
    images: ["manchester-1"]
  },
  {
    id: "uk-sco-01",
    title: "Highlands Glass Cabin",
    country: "UK",
    region: "SCOTLAND",
    locationLabel: "Scottish Highlands, United Kingdom",
    description: "Remote glass cabin surrounded by heather and lochs, designed for off-grid serenity.",
    pricePerNight: 350,
    rating: 4.97,
    reviewCount: 143,
    images: ["scotland-1", "scotland-1b"]
  },
  {
    id: "usa-nyc-01",
    title: "SoHo Skyloft",
    country: "USA",
    region: "NYC",
    locationLabel: "New York City, USA",
    description: "Ultra-minimal SoHo loft with double-height windows and a private rooftop terrace.",
    pricePerNight: 640,
    rating: 4.92,
    reviewCount: 189,
    images: ["nyc-1", "nyc-1b"],
    featured: true
  },
  {
    id: "usa-west-01",
    title: "Pacific Clifftop Villa",
    country: "USA",
    region: "WEST_COAST",
    locationLabel: "Big Sur, USA",
    description: "Cantilevered villa over the Pacific with frameless glass railings and firepit deck.",
    pricePerNight: 720,
    rating: 4.98,
    reviewCount: 134,
    images: ["westcoast-1"]
  },
  {
    id: "usa-hot-01",
    title: "Desert Mirage Pavilion",
    country: "USA",
    region: "HOTSPOTS",
    locationLabel: "Palm Springs, USA",
    description: "Mid-century pavilion with a reflective pool and mountain backdrop, perfect for retreats.",
    pricePerNight: 410,
    rating: 4.85,
    reviewCount: 96,
    images: ["palmsprings-1"]
  },
  {
    id: "au-syd-01",
    title: "Harbourline Penthouse",
    country: "AUSTRALIA",
    region: "SYDNEY",
    locationLabel: "Sydney, Australia",
    description: "Penthouse with wraparound balcony capturing both the Opera House and Harbour Bridge.",
    pricePerNight: 690,
    rating: 4.96,
    reviewCount: 157,
    images: ["sydney-1", "sydney-1b"]
  },
  {
    id: "au-gc-01",
    title: "Gold Coast Surf Villa",
    country: "AUSTRALIA",
    region: "GOLD_COAST",
    locationLabel: "Gold Coast, Australia",
    description: "Laid-back surf villa a few steps from the sand with an outdoor shower garden.",
    pricePerNight: 330,
    rating: 4.78,
    reviewCount: 73,
    images: ["goldcoast-1"]
  },
  {
    id: "au-per-01",
    title: "Perth Sunset Loft",
    country: "AUSTRALIA",
    region: "PERTH",
    locationLabel: "Perth, Australia",
    description: "Sunset-facing loft with warm timber interiors and views over the Swan River.",
    pricePerNight: 310,
    rating: 4.82,
    reviewCount: 68,
    images: ["perth-1"]
  }
];

// State Management
let activeCountry = "PAKISTAN";
let activeRegion = null;
let listingCarousels = {}; // Track carousel state per listing

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initializeCountryFilters();
  initializeRegionFilters();
  updateRegionSelect();
  updateVibeText();
  renderListings();
});

// Initialize Country Filters
function initializeCountryFilters() {
  const container = document.getElementById("country-filters");
  container.innerHTML = "";

  COUNTRIES.forEach((country) => {
    const btn = document.createElement("button");
    btn.className = `country-filter-btn ${country.code === activeCountry ? "active" : ""}`;
    btn.innerHTML = `
      <div class="country-filter-icon">
        <i class="${country.icon}"></i>
      </div>
      <span>${country.label}</span>
    `;
    btn.onclick = () => handleCountryChange(country.code);
    container.appendChild(btn);
  });
}

// Initialize Region Filters
function initializeRegionFilters() {
  updateRegionFilters();
}

function updateRegionFilters() {
  const container = document.getElementById("region-filters");
  container.innerHTML = "";

  const currentCountry = COUNTRIES.find((c) => c.code === activeCountry);
  if (!currentCountry) return;

  currentCountry.regions.forEach((region) => {
    const btn = document.createElement("button");
    btn.className = `region-filter-btn ${region.code === activeRegion ? "active" : ""}`;
    btn.textContent = region.label;
    btn.onclick = () => handleRegionChange(region.code);
    container.appendChild(btn);
  });
}

// Update Region Select Dropdown
function updateRegionSelect() {
  const select = document.getElementById("region-select");
  const currentCountry = COUNTRIES.find((c) => c.code === activeCountry);
  
  select.innerHTML = "";
  
  if (currentCountry && currentCountry.regions.length > 0) {
    currentCountry.regions.forEach((region) => {
      const option = document.createElement("option");
      option.value = region.code;
      option.textContent = region.label;
      if (region.code === activeRegion) {
        option.selected = true;
      }
      select.appendChild(option);
    });
  }
}

// Update Vibe Text
function updateVibeText() {
  const currentCountry = COUNTRIES.find((c) => c.code === activeCountry);
  const vibeText = document.getElementById("vibe-text");
  if (vibeText && currentCountry) {
    vibeText.textContent = currentCountry.vibe;
  }
}

// Handle Country Change
function handleCountryChange(countryCode) {
  activeCountry = countryCode;
  const currentCountry = COUNTRIES.find((c) => c.code === countryCode);
  
  // Auto-select first region
  if (currentCountry && currentCountry.regions.length > 0) {
    activeRegion = currentCountry.regions[0].code;
  } else {
    activeRegion = null;
  }

  // Update UI
  initializeCountryFilters();
  updateRegionFilters();
  updateRegionSelect();
  updateVibeText();
  updateFilterText();
  renderListings();

  // Update country select
  document.getElementById("country-select").value = countryCode;
}

// Handle Region Change
function handleRegionChange(regionCode) {
  if (activeRegion === regionCode) {
    activeRegion = null; // Toggle off if clicking same region
  } else {
    activeRegion = regionCode;
  }

  updateRegionFilters();
  updateRegionSelect();
  updateFilterText();
  renderListings();
}

// Update Filter Text
function updateFilterText() {
  const text = document.getElementById("filter-text");
  if (text) {
    const currentCountry = COUNTRIES.find((c) => c.code === activeCountry);
    let filterText = `Refined for ${currentCountry?.label || activeCountry}`;
    if (activeRegion) {
      const region = currentCountry?.regions.find((r) => r.code === activeRegion);
      filterText += ` · ${region?.label || activeRegion}`;
    }
    text.textContent = filterText;
  }
}

// Reset Filters
function resetFilters() {
  handleCountryChange("PAKISTAN");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render Listings
function renderListings() {
  const container = document.getElementById("listings-grid");
  const countEl = document.getElementById("listing-count");

  // Filter listings
  const filtered = LISTINGS.filter((listing) => {
    if (listing.country !== activeCountry) return false;
    if (activeRegion && listing.region !== activeRegion) return false;
    return true;
  });

  // Update count
  if (countEl) {
    countEl.textContent = filtered.length;
  }

  // Clear container
  container.innerHTML = "";

  // Render listings
  filtered.forEach((listing) => {
    const card = createListingCard(listing);
    container.appendChild(card);
  });
}

// Create Listing Card
function createListingCard(listing) {
  const card = document.createElement("div");
  card.className = "listing-card";
  
  const hasMultipleImages = listing.images.length > 1;
  const carouselId = `carousel-${listing.id}`;
  listingCarousels[carouselId] = { currentIndex: 0, total: listing.images.length };

  card.innerHTML = `
    <div class="listing-image-container">
      <div class="listing-image-placeholder" id="${carouselId}-image">
        <span>${listing.locationLabel}</span>
      </div>
      <button class="listing-heart-btn">
        <i class="far fa-heart"></i>
      </button>
      ${hasMultipleImages ? `
        <button class="listing-carousel-controls listing-carousel-prev" onclick="carouselPrev('${carouselId}')">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="listing-carousel-controls listing-carousel-next" onclick="carouselNext('${carouselId}')">
          <i class="fas fa-chevron-right"></i>
        </button>
        <div class="listing-carousel-dots" id="${carouselId}-dots">
          ${listing.images.map((_, idx) => `
            <span class="listing-carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
          `).join('')}
        </div>
      ` : ''}
    </div>
    <div class="listing-info">
      <div class="listing-title-group">
        <h3 class="listing-title">${listing.title}</h3>
        <p class="listing-location">${listing.locationLabel}</p>
      </div>
      <div class="listing-rating">
        <i class="fas fa-star"></i>
        <span>${listing.rating.toFixed(2)}</span>
      </div>
    </div>
    <div class="listing-footer">
      <div class="listing-price">
        <span class="listing-price-amount">$${listing.pricePerNight}</span>
        <span class="listing-price-unit">night</span>
      </div>
      <span class="listing-reviews">${listing.reviewCount.toLocaleString()} reviews</span>
    </div>
  `;

  return card;
}

// Carousel Functions
function carouselPrev(carouselId) {
  const carousel = listingCarousels[carouselId];
  if (!carousel) return;
  
  carousel.currentIndex = carousel.currentIndex === 0 
    ? carousel.total - 1 
    : carousel.currentIndex - 1;
  
  updateCarousel(carouselId);
}

function carouselNext(carouselId) {
  const carousel = listingCarousels[carouselId];
  if (!carousel) return;
  
  carousel.currentIndex = carousel.currentIndex === carousel.total - 1 
    ? 0 
    : carousel.currentIndex + 1;
  
  updateCarousel(carouselId);
}

function updateCarousel(carouselId) {
  const carousel = listingCarousels[carouselId];
  if (!carousel) return;
  
  const dots = document.querySelectorAll(`#${carouselId}-dots .listing-carousel-dot`);
  dots.forEach((dot, idx) => {
    if (idx === carousel.currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
  
  // In a real app, you'd update the image src here
  // For now, the placeholder stays the same
}
