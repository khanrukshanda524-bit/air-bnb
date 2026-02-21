/* ===========================
   DATA
=========================== */
const COUNTRIES = [
  { code: "PAKISTAN",     label: "Pakistan",          flag: "🇵🇰" },
  { code: "CANADA",       label: "Canada",             flag: "🇨🇦" },
  { code: "USA",          label: "United States",      flag: "🇺🇸" },
  { code: "UAE",          label: "United Arab Emirates", flag: "🇦🇪" },
  { code: "UK",           label: "United Kingdom",     flag: "🇬🇧" },
  { code: "INDONESIA",    label: "Indonesia",          flag: "🇮🇩" },
  { code: "SOUTH_AFRICA", label: "South Africa",       flag: "🇿🇦" },
  { code: "SAUDI_ARABIA", label: "Saudi Arabia",       flag: "🇸🇦" },
  { code: "AUSTRALIA",    label: "Australia",          flag: "🇦🇺" },
  { code: "NEW_ZEALAND",  label: "New Zealand",        flag: "🇳🇿" },
  { code: "EU",           label: "European Union",     flag: "🇪🇺" }
];

const LISTINGS = [
  {
    id: "1",
    title: "Luxury Apartment in Downtown Dubai",
    location: "Dubai, UAE",
    price: 250,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
  },
  {
    id: "2",
    title: "Modern Loft in Manhattan",
    location: "New York, USA",
    price: 320,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
  },
  {
    id: "3",
    title: "Beachfront Villa in Sydney",
    location: "Sydney, Australia",
    price: 450,
    rating: 5.0,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
  },
  {
    id: "4",
    title: "Historic Apartment in London",
    location: "London, UK",
    price: 280,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"
  },
  {
    id: "5",
    title: "Mountain View Chalet in Islamabad",
    location: "Islamabad, Pakistan",
    price: 120,
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  },
  {
    id: "6",
    title: "Coastal Retreat in Cape Town",
    location: "Cape Town, South Africa",
    price: 180,
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
  }
];

/* ===========================
   STATE
=========================== */
let currentStep = 1;
let guestCount = 1;
const GUEST_MIN = 1;
const GUEST_MAX = 10;
const likedListings = new Set();

let propertyData = {
  title: "", type: "", location: "", price: "",
  bedrooms: "", bathrooms: "", guests: "", description: "", images: []
};

/* ===========================
   INIT
=========================== */
document.addEventListener("DOMContentLoaded", () => {
  initializeCountryFlags();
  showSkeletons();
  // Simulate brief loading then render real cards
  setTimeout(() => {
    renderListings(LISTINGS);
  }, 900);

  setupImageUpload();
  setupDateInputs();
  setupGuestCounter();

  // Search button
  document.getElementById("search-btn").addEventListener("click", () => {
    const dest = document.getElementById("destination-input").value.trim();
    showToast(
      dest ? `Searching "${dest}"` : "Searching all destinations",
      "Finding your perfect stay…",
      "info"
    );
  });

  // Close modal on overlay click
  document.getElementById("property-modal").addEventListener("click", (e) => {
    if (e.target.id === "property-modal") closePropertyModal();
  });
});

/* ===========================
   COUNTRY FLAGS
=========================== */
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
  // Toggle active state
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

  setTimeout(() => {
    const filtered = isAlreadyActive
      ? LISTINGS
      : LISTINGS.filter(l => {
          const countryMap = {
            UAE: "UAE", USA: "USA", UK: "UK", AUSTRALIA: "Australia",
            PAKISTAN: "Pakistan", SOUTH_AFRICA: "South Africa"
          };
          return l.location.includes(countryMap[code] || code);
        });

    renderListings(filtered);
    grid.style.opacity = "1";
  }, 200);
}

/* ===========================
   SKELETON LOADERS
=========================== */
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

/* ===========================
   RENDER LISTINGS
=========================== */
function renderListings(data = LISTINGS) {
  const grid = document.getElementById("listings-grid");
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

  data.forEach((listing, i) => {
    const card = createListingCard(listing, i);
    grid.appendChild(card);
  });
}

/* ===========================
   LISTING CARD
=========================== */
function createListingCard(listing, index = 0) {
  const card = document.createElement("div");
  card.className = "listing-card";
  card.style.animationDelay = `${index * 60}ms`;

  const isLiked = likedListings.has(listing.id);

  card.innerHTML = `
    <div class="listing-image-container">
      <img src="${listing.image}" alt="${listing.title}" class="listing-image" loading="lazy" />
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
      <span class="listing-reviews">${listing.reviews} reviews</span>
    </div>
  `;

  // Heart button logic
  const heartBtn = card.querySelector(".listing-heart-btn");
  heartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleHeart(listing, heartBtn);
  });

  return card;
}

/* ===========================
   HEART TOGGLE
=========================== */
function toggleHeart(listing, btn) {
  const isLiked = likedListings.has(listing.id);

  // Animate first
  btn.classList.remove("heart-pop");
  void btn.offsetWidth; // reflow to restart animation
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

  // Remove animation class after it ends
  btn.addEventListener("animationend", () => btn.classList.remove("heart-pop"), { once: true });
}

/* ===========================
   TOAST SYSTEM
=========================== */
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

  // Auto-dismiss after 3.5s
  setTimeout(() => dismissToast(toast), 3500);
}

function dismissToast(toast) {
  if (!toast.isConnected) return;
  toast.classList.add("toast-exit");
  toast.addEventListener("animationend", () => toast.remove(), { once: true });
}

/* ===========================
   GUEST COUNTER
=========================== */
function setupGuestCounter() {
  updateGuestUI();
}

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

/* ===========================
   PROPERTY MODAL
=========================== */
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
  if (validateCurrentStep()) {
    if (currentStep < 4) {
      currentStep++;
      updateModalStep();
    }
  }
}

function previousStep() {
  if (currentStep > 1) {
    currentStep--;
    updateModalStep();
  }
}

function updateModalStep() {
  const totalSteps = 4;

  // Progress steps
  document.querySelectorAll(".progress-step").forEach((el, i) => {
    el.classList.toggle("active", i + 1 <= currentStep);
  });

  // Progress lines
  document.querySelectorAll(".progress-line").forEach((line, i) => {
    line.classList.toggle("filled", i + 1 < currentStep);
  });

  // Thin progress bar at top
  const fill = document.getElementById("modal-thin-progress-fill");
  if (fill) fill.style.width = `${(currentStep / totalSteps) * 100}%`;

  // Step content
  document.querySelectorAll(".modal-step").forEach((el, i) => {
    el.classList.toggle("active", i + 1 === currentStep);
  });

  // Buttons
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
      { transform: "translateX(0)" },
      { transform: "translateX(-6px)" },
      { transform: "translateX(6px)" },
      { transform: "translateX(-4px)" },
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

/* ===========================
   IMAGE UPLOAD
=========================== */
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

  // Drag and drop
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

/* ===========================
   DATE INPUTS
=========================== */
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

/* ===========================
   RESET
=========================== */
function resetFilters() {
  document.querySelectorAll(".country-flag-item").forEach(el => el.classList.remove("active"));
  const grid = document.getElementById("listings-grid");
  grid.style.opacity = "0";
  setTimeout(() => {
    renderListings(LISTINGS);
    grid.style.transition = "opacity 0.3s";
    grid.style.opacity = "1";
  }, 150);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
