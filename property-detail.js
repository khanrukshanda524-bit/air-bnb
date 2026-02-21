/* ============================================================
   property-detail.js  —  Logic for property-detail.html.
   Reads ?id= from URL, finds the listing in LISTINGS (data.js),
   and populates the entire page.
============================================================ */

/* ── State ── */
let lightboxImages = [];
let lightboxIndex  = 0;
let currentListing = null;
let bkGuestCount   = 1;
const BK_GUEST_MIN = 1;
const BK_GUEST_MAX = 10;
let isSaved = false;

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  const params  = new URLSearchParams(window.location.search);
  const id      = params.get("id");
  const listing = LISTINGS.find(l => l.id === id);

  if (!listing) {
    showState("error");
    return;
  }

  currentListing = listing;
  populatePage(listing);
  setupBookingDates();
  updateBkGuestUI();

  // Heart / Save button
  document.getElementById("pd-heart-btn").addEventListener("click", () => {
    isSaved = !isSaved;
    const icon  = document.getElementById("pd-heart-icon");
    const label = document.getElementById("pd-heart-label");
    icon.className  = isSaved ? "fas fa-heart" : "far fa-heart";
    label.textContent = isSaved ? "Saved" : "Save";
    document.getElementById("pd-heart-btn").classList.toggle("saved", isSaved);
    showToast(
      isSaved ? "Saved to Favorites ❤️" : "Removed from Favorites",
      listing.title,
      isSaved ? "heart" : "info"
    );
  });

  // Lightbox close on overlay click
  document.getElementById("gallery-lightbox").addEventListener("click", (e) => {
    if (e.target.id === "gallery-lightbox") closeLightbox();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft")  lightboxNav(-1);
    if (e.key === "ArrowRight") lightboxNav(1);
  });

  showState("content");
});

/* ── Visibility helper ── */
function showState(state) {
  document.getElementById("pd-loading").style.display = state === "loading" ? "flex"  : "none";
  document.getElementById("pd-error")  .style.display = state === "error"   ? "flex"  : "none";
  document.getElementById("pd-content").style.display = state === "content" ? "block" : "none";
}

/* ── Populate entire page from listing object ── */
function populatePage(listing) {
  // <title>
  document.title = `${listing.title} – LuxuryStays`;

  // Hero bar
  document.getElementById("pd-title").textContent    = listing.title;
  document.getElementById("pd-rating").textContent   = listing.rating.toFixed(1);
  document.getElementById("pd-location").textContent = listing.location;

  const reviewCount = listing.reviews.length;
  document.getElementById("pd-review-count-meta").textContent = `${reviewCount} review${reviewCount !== 1 ? "s" : ""}`;

  // Stats
  document.getElementById("pd-bedrooms").textContent  = `${listing.bedrooms} bedroom${listing.bedrooms !== 1 ? "s" : ""}`;
  document.getElementById("pd-bathrooms").textContent = `${listing.bathrooms} bathroom${listing.bathrooms !== 1 ? "s" : ""}`;
  document.getElementById("pd-guests").textContent    = `Up to ${listing.maxGuests} guests`;

  // Description
  document.getElementById("pd-description").textContent = listing.description || "A beautiful property awaiting your visit.";

  // Price
  const priceStr = `$${listing.price}`;
  document.getElementById("pd-price").textContent         = priceStr;
  document.getElementById("pd-booking-rating").textContent = listing.rating.toFixed(1);
  document.getElementById("pd-booking-reviews").textContent = reviewCount;

  // Reviews section
  document.getElementById("pd-rating-reviews").textContent  = listing.rating.toFixed(2);
  document.getElementById("pd-review-count").textContent    = reviewCount;

  // Build gallery, amenities, reviews
  buildGallery(listing.images);
  buildAmenities(listing.amenities || []);
  buildReviews(listing.reviews);
}

/* ── Gallery (Airbnb 1 large + 4 thumbs) ── */
function buildGallery(images) {
  const gallery = document.getElementById("pd-gallery");
  gallery.innerHTML = "";
  if (!images || images.length === 0) return;

  lightboxImages = images;

  const main = document.createElement("div");
  main.className = "pd-gallery-main";
  main.innerHTML = `<img src="${images[0]}" alt="Property photo 1" loading="eager" />`;
  main.addEventListener("click", () => openLightbox(0));
  gallery.appendChild(main);

  const thumbsWrap = document.createElement("div");
  thumbsWrap.className = "pd-gallery-thumbs";

  const count = Math.min(images.length - 1, 4);
  for (let i = 1; i <= count; i++) {
    const thumb = document.createElement("div");
    thumb.className = "pd-gallery-thumb";
    thumb.innerHTML = `<img src="${images[i]}" alt="Property photo ${i + 1}" loading="lazy" />`;

    if (i === count && images.length > 5) {
      thumb.innerHTML += `
        <button class="pd-gallery-view-all" onclick="openLightbox(${i})">
          <i class="fas fa-images"></i> +${images.length - 5} photos
        </button>
      `;
    }

    const idx = i;
    thumb.addEventListener("click", () => openLightbox(idx));
    thumbsWrap.appendChild(thumb);
  }

  gallery.appendChild(thumbsWrap);
}

/* ── Amenities ── */
function buildAmenities(amenities) {
  const container = document.getElementById("pd-amenities");
  container.innerHTML = "";

  if (!amenities || amenities.length === 0) {
    container.innerHTML = `<p style="color:var(--slate-400);">Amenities not listed.</p>`;
    return;
  }

  amenities.forEach(a => {
    const item = document.createElement("div");
    item.className = "pd-amenity-item";
    item.innerHTML = `
      <div class="pd-amenity-icon"><i class="fas ${a.icon}"></i></div>
      <span class="pd-amenity-label">${a.label}</span>
    `;
    container.appendChild(item);
  });
}

/* ── Reviews ── */
function buildReviews(reviews) {
  const grid = document.getElementById("pd-reviews-grid");
  grid.innerHTML = "";

  if (!reviews || reviews.length === 0) {
    grid.innerHTML = `<p style="color:var(--slate-400); font-size:14px;">No reviews yet.</p>`;
    return;
  }

  reviews.forEach((rev, i) => {
    const card = document.createElement("div");
    card.className = "pd-review-card";
    card.style.animationDelay = `${i * 70}ms`;

    const initials  = rev.author.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
    const fullStars  = Math.floor(rev.rating);
    const emptyStars = 5 - fullStars;
    const starsHTML  = `
      ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
      ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
    `;

    card.innerHTML = `
      <div class="pd-review-top">
        <div class="pd-review-avatar">${initials}</div>
        <div class="pd-review-author-block">
          <span class="pd-review-author">${rev.author}</span>
          <span class="pd-review-date">${rev.date}</span>
        </div>
      </div>
      <div class="pd-review-stars">${starsHTML}</div>
      <p class="pd-review-comment">"${rev.comment}"</p>
    `;

    grid.appendChild(card);
  });
}

/* ── Booking form ── */
function setupBookingDates() {
  const checkin  = document.getElementById("bk-checkin");
  const checkout = document.getElementById("bk-checkout");
  const today    = new Date().toISOString().split("T")[0];

  checkin.min  = today;
  checkout.min = today;

  function updateBreakdown() {
    const c1 = new Date(checkin.value);
    const c2 = new Date(checkout.value);
    if (!checkin.value || !checkout.value || c2 <= c1) {
      document.getElementById("pd-price-breakdown").style.display = "none";
      return;
    }

    const nights  = Math.round((c2 - c1) / (1000 * 60 * 60 * 24));
    const price   = currentListing ? currentListing.price : 0;
    const subtotal = nights * price;
    const fee      = Math.round(subtotal * 0.14);
    const total    = subtotal + fee;

    document.getElementById("bd-nights-label").textContent = `$${price} × ${nights} night${nights !== 1 ? "s" : ""}`;
    document.getElementById("bd-nights-total").textContent = `$${subtotal}`;
    document.getElementById("bd-fee").textContent          = `$${fee}`;
    document.getElementById("bd-total").textContent        = `$${total}`;
    document.getElementById("pd-price-breakdown").style.display = "block";
  }

  checkin.addEventListener("change", () => {
    const d = new Date(checkin.value);
    d.setDate(d.getDate() + 1);
    checkout.min = d.toISOString().split("T")[0];
    if (checkout.value && new Date(checkout.value) <= new Date(checkin.value)) {
      checkout.value = "";
      document.getElementById("pd-price-breakdown").style.display = "none";
    }
    updateBreakdown();
  });

  checkout.addEventListener("change", updateBreakdown);
}

function changeBkGuests(delta) {
  const next = bkGuestCount + delta;
  if (next < BK_GUEST_MIN || next > BK_GUEST_MAX) return;
  bkGuestCount = next;
  updateBkGuestUI();
}

function updateBkGuestUI() {
  document.getElementById("bk-guests-display").textContent = bkGuestCount;
  document.getElementById("bk-minus").disabled = bkGuestCount <= BK_GUEST_MIN;
  document.getElementById("bk-plus").disabled  = bkGuestCount >= BK_GUEST_MAX;
}

function submitBooking(e) {
  e.preventDefault();
  const name     = document.getElementById("bk-name").value.trim();
  const checkin  = document.getElementById("bk-checkin").value;
  const checkout = document.getElementById("bk-checkout").value;

  if (!checkin || !checkout) {
    showToast("Select dates", "Please choose your check-in and check-out dates.", "info");
    return;
  }

  showToast(
    "Booking Confirmed! 🎉",
    `${name}, your stay at "${currentListing.title}" is booked.`,
    "success"
  );

  // Reset form
  document.getElementById("pd-booking-form").reset();
  bkGuestCount = 1;
  updateBkGuestUI();
  document.getElementById("pd-price-breakdown").style.display = "none";
}

/* ── Lightbox ── */
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
  if (!lightboxImages.length) return;
  lightboxIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  document.getElementById("lightbox-img").src = lightboxImages[lightboxIndex];
  document.getElementById("lightbox-counter").textContent =
    `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

/* ── Toast (same as script.js) ── */
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
  setTimeout(() => dismissToast(toast), 4000);
}

function dismissToast(toast) {
  if (!toast.isConnected) return;
  toast.classList.add("toast-exit");
  toast.addEventListener("animationend", () => toast.remove(), { once: true });
}
