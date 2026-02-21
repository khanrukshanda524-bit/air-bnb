/* ============================================================
   script.js  —  Home page logic only.
   Data (LISTINGS, COUNTRIES, locationData) comes from data.js.
============================================================ */

/* =============================================
   STATE
============================================= */
let currentStep = 1;
let guestCount  = 1;
const GUEST_MIN = 1;
const GUEST_MAX = 10;
const likedListings = new Set();

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

  // Update location background collage using strict locationData keywords
  updateLocationBackground(isAlreadyActive ? null : code);

  setTimeout(() => {
    const filtered = isAlreadyActive
      ? LISTINGS
      : LISTINGS.filter(l => {
          const data = locationData[code];
          if (!data) return false;
          return data.keywords.some(kw => l.location.includes(kw));
        });

    renderListings(filtered);
    grid.style.opacity = "1";
  }, 200);
}

/* =============================================
   LOCATION BACKGROUND COLLAGE
   Uses strict locationData.backgroundImages (no cross-country sharing).
============================================= */
function updateLocationBackground(countryCode) {
  const collage = document.getElementById("location-bg-collage");

  collage.classList.remove("visible");
  collage.classList.add("fade-change");

  setTimeout(() => {
    collage.innerHTML = "";
    collage.classList.remove("fade-change");

    const data = countryCode ? locationData[countryCode] : null;
    if (!data || !data.backgroundImages) return;

    data.backgroundImages.slice(0, 6).forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${data.label} landmark ${i + 1}`;
      img.className = "location-bg-img";
      img.loading = "lazy";
      collage.appendChild(img);
    });

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
          <i class="fas fa-redo"></i> Reset Filters
        </button>
      </div>
    `;
    return;
  }

  data.forEach((listing, i) => grid.appendChild(createListingCard(listing, i)));
}

/* =============================================
   LISTING CARD
   Clicking card navigates to property-detail.html?id=X
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
      <span class="listing-reviews">${reviewCount} review${reviewCount !== 1 ? "s" : ""}</span>
    </div>
  `;

  // Heart button — stop propagation so card click doesn't navigate
  const heartBtn = card.querySelector(".listing-heart-btn");
  heartBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleHeart(listing, heartBtn);
  });

  // Card click → navigate to dedicated detail page
  card.addEventListener("click", () => {
    window.location.href = `property-detail.html?id=${listing.id}`;
  });
  card.style.cursor = "pointer";

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
   PROPERTY FORM MODAL (List Your Property)
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
  updateLocationBackground(null);

  const grid = document.getElementById("listings-grid");
  grid.style.opacity = "0";
  setTimeout(() => {
    renderListings(LISTINGS);
    grid.style.transition = "opacity 0.3s";
    grid.style.opacity = "1";
  }, 150);

  window.scrollTo({ top: 0, behavior: "smooth" });
}
