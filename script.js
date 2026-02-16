// Country Data with Flags
const COUNTRIES = [
  { code: "PAKISTAN", label: "Pakistan", flag: "🇵🇰", icon: "fas fa-mountain" },
  { code: "CANADA", label: "Canada", flag: "🇨🇦", icon: "fas fa-snowflake" },
  { code: "USA", label: "United States", flag: "🇺🇸", icon: "fas fa-city" },
  { code: "UAE", label: "United Arab Emirates", flag: "🇦🇪", icon: "fas fa-building" },
  { code: "UK", label: "United Kingdom", flag: "🇬🇧", icon: "fas fa-landmark" },
  { code: "INDONESIA", label: "Indonesia", flag: "🇮🇩", icon: "fas fa-water" },
  { code: "SOUTH_AFRICA", label: "South Africa", flag: "🇿🇦", icon: "fas fa-mountain" },
  { code: "SAUDI_ARABIA", label: "Saudi Arabia", flag: "🇸🇦", icon: "fas fa-mosque" },
  { code: "AUSTRALIA", label: "Australia", flag: "🇦🇺", icon: "fas fa-water" },
  { code: "NEW_ZEALAND", label: "New Zealand", flag: "🇳🇿", icon: "fas fa-mountain" },
  { code: "EU", label: "European Union", flag: "🇪🇺", icon: "fas fa-globe-europe" }
];

// Sample Listings Data
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

// State Management
let currentStep = 1;
let propertyData = {
  title: "",
  type: "",
  location: "",
  price: "",
  bedrooms: "",
  bathrooms: "",
  guests: "",
  description: "",
  images: []
};

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  initializeCountryFlags();
  renderListings();
  setupImageUpload();
  setupDateInputs();
});

// Initialize Country Flags
function initializeCountryFlags() {
  const container = document.getElementById("country-flags-container");
  container.innerHTML = "";
  
  COUNTRIES.forEach(country => {
    const flagItem = document.createElement("div");
    flagItem.className = "country-flag-item";
    flagItem.onclick = () => filterByCountry(country.code);
    
    flagItem.innerHTML = `
      <div class="country-flag-circle">
        <span class="flag-icon">${country.flag}</span>
      </div>
      <span class="country-flag-name">${country.label}</span>
    `;
    
    container.appendChild(flagItem);
  });
}

// Filter by Country
function filterByCountry(countryCode) {
  console.log(`Filtering by ${countryCode}`);
  // Add your filtering logic here
  renderListings();
}

// Render Listings
function renderListings() {
  const container = document.getElementById("listings-grid");
  const countEl = document.getElementById("listing-count");
  
  if (countEl) {
    countEl.textContent = LISTINGS.length;
  }
  
  container.innerHTML = "";
  
  LISTINGS.forEach(listing => {
    const card = createListingCard(listing);
    container.appendChild(card);
  });
}

// Create Listing Card
function createListingCard(listing) {
  const card = document.createElement("div");
  card.className = "listing-card";
  
  card.innerHTML = `
    <div class="listing-image-container">
      <img src="${listing.image}" alt="${listing.title}" class="listing-image" />
      <button class="listing-heart-btn">
        <i class="far fa-heart"></i>
      </button>
    </div>
    <div class="listing-info">
      <h3 class="listing-title">${listing.title}</h3>
      <p class="listing-location">${listing.location}</p>
      <div class="listing-rating">
        <i class="fas fa-star"></i>
        <span>${listing.rating}</span>
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
  
  return card;
}

// Property Modal Functions
function openPropertyModal() {
  const modal = document.getElementById("property-modal");
  modal.classList.add("active");
  currentStep = 1;
  updateModalStep();
}

function closePropertyModal() {
  const modal = document.getElementById("property-modal");
  modal.classList.remove("active");
  currentStep = 1;
  propertyData = {
    title: "",
    type: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    guests: "",
    description: "",
    images: []
  };
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
  // Update progress indicators
  document.querySelectorAll(".progress-step").forEach((step, index) => {
    if (index + 1 <= currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  
  // Update step content
  document.querySelectorAll(".modal-step").forEach((step, index) => {
    if (index + 1 === currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  
  // Update buttons
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");
  
  prevBtn.style.display = currentStep > 1 ? "block" : "none";
  nextBtn.style.display = currentStep < 4 ? "block" : "none";
  submitBtn.style.display = currentStep === 4 ? "block" : "none";
  
  // Update review summary on step 4
  if (currentStep === 4) {
    updateReviewSummary();
  }
}

function validateCurrentStep() {
  switch (currentStep) {
    case 1:
      const title = document.getElementById("property-title").value;
      const type = document.getElementById("property-type").value;
      const location = document.getElementById("property-location").value;
      const price = document.getElementById("property-price").value;
      
      if (!title || !type || !location || !price) {
        alert("Please fill in all fields");
        return false;
      }
      
      propertyData.title = title;
      propertyData.type = type;
      propertyData.location = location;
      propertyData.price = price;
      return true;
      
    case 2:
      const bedrooms = document.getElementById("property-bedrooms").value;
      const bathrooms = document.getElementById("property-bathrooms").value;
      const guests = document.getElementById("property-guests").value;
      const description = document.getElementById("property-description").value;
      
      if (!bedrooms || !bathrooms || !guests || !description) {
        alert("Please fill in all fields");
        return false;
      }
      
      propertyData.bedrooms = bedrooms;
      propertyData.bathrooms = bathrooms;
      propertyData.guests = guests;
      propertyData.description = description;
      return true;
      
    case 3:
      if (propertyData.images.length === 0) {
        alert("Please upload at least one image");
        return false;
      }
      return true;
      
    default:
      return true;
  }
}

function updateReviewSummary() {
  const summary = document.getElementById("review-summary");
  summary.innerHTML = `
    <div class="review-item">
      <span class="review-item-label">Title:</span>
      <span class="review-item-value">${propertyData.title}</span>
    </div>
    <div class="review-item">
      <span class="review-item-label">Type:</span>
      <span class="review-item-value">${propertyData.type}</span>
    </div>
    <div class="review-item">
      <span class="review-item-label">Location:</span>
      <span class="review-item-value">${propertyData.location}</span>
    </div>
    <div class="review-item">
      <span class="review-item-label">Price per Night:</span>
      <span class="review-item-value">$${propertyData.price}</span>
    </div>
    <div class="review-item">
      <span class="review-item-label">Bedrooms:</span>
      <span class="review-item-value">${propertyData.bedrooms}</span>
    </div>
    <div class="review-item">
      <span class="review-item-label">Bathrooms:</span>
      <span class="review-item-value">${propertyData.bathrooms}</span>
    </div>
    <div class="review-item">
      <span class="review-item-label">Max Guests:</span>
      <span class="review-item-value">${propertyData.guests}</span>
    </div>
    <div class="review-item">
      <span class="review-item-label">Images:</span>
      <span class="review-item-value">${propertyData.images.length} uploaded</span>
    </div>
  `;
}

function resetForm() {
  document.getElementById("property-title").value = "";
  document.getElementById("property-type").value = "";
  document.getElementById("property-location").value = "";
  document.getElementById("property-price").value = "";
  document.getElementById("property-bedrooms").value = "";
  document.getElementById("property-bathrooms").value = "";
  document.getElementById("property-guests").value = "";
  document.getElementById("property-description").value = "";
  propertyData.images = [];
  document.getElementById("uploaded-images").innerHTML = "";
}

function submitProperty() {
  console.log("Submitting property:", propertyData);
  alert("Property listing submitted successfully!");
  closePropertyModal();
  // In a real app, you would send this data to a server
}

// Image Upload Setup
function setupImageUpload() {
  const imageInput = document.getElementById("image-input");
  const uploadedImages = document.getElementById("uploaded-images");
  
  imageInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        
        reader.onload = (event) => {
          const imageUrl = event.target.result;
          propertyData.images.push(imageUrl);
          
          const imageItem = document.createElement("div");
          imageItem.className = "uploaded-image-item";
          imageItem.innerHTML = `
            <img src="${imageUrl}" alt="Uploaded" />
            <button class="remove-image" onclick="removeImage(${propertyData.images.length - 1})">
              <i class="fas fa-times"></i>
            </button>
          `;
          
          uploadedImages.appendChild(imageItem);
        };
        
        reader.readAsDataURL(file);
      }
    });
    
    // Reset input
    imageInput.value = "";
  });
}

function removeImage(index) {
  propertyData.images.splice(index, 1);
  renderUploadedImages();
}

function renderUploadedImages() {
  const uploadedImages = document.getElementById("uploaded-images");
  uploadedImages.innerHTML = "";
  
  propertyData.images.forEach((imageUrl, index) => {
    const imageItem = document.createElement("div");
    imageItem.className = "uploaded-image-item";
    imageItem.innerHTML = `
      <img src="${imageUrl}" alt="Uploaded" />
      <button class="remove-image" onclick="removeImage(${index})">
        <i class="fas fa-times"></i>
      </button>
    `;
    uploadedImages.appendChild(imageItem);
  });
}

// Setup Date Inputs
function setupDateInputs() {
  const checkinInput = document.getElementById("checkin-input");
  const checkoutInput = document.getElementById("checkout-input");
  
  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];
  checkinInput.min = today;
  checkoutInput.min = today;
  
  // Update checkout minimum when checkin changes
  checkinInput.addEventListener("change", (e) => {
    const checkinDate = new Date(e.target.value);
    checkinDate.setDate(checkinDate.getDate() + 1);
    checkoutInput.min = checkinDate.toISOString().split("T")[0];
  });
}

// Search Functionality
document.querySelector(".search-btn")?.addEventListener("click", () => {
  const destination = document.getElementById("destination-input").value;
  const checkin = document.getElementById("checkin-input").value;
  const checkout = document.getElementById("checkout-input").value;
  const guests = document.getElementById("guests-input").value;
  
  console.log("Search:", { destination, checkin, checkout, guests });
  // Add your search logic here
});

// Close modal on overlay click
document.getElementById("property-modal")?.addEventListener("click", (e) => {
  if (e.target.id === "property-modal") {
    closePropertyModal();
  }
});

// Reset filters function
function resetFilters() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
