# Luxury Airbnb Website

A modern, high-end Airbnb-style website featuring a stunning Dubai skyline hero section, glassmorphism design, and professional UI/UX.

## Features

### 🏙️ Hero Section
- Full-screen Dubai skyline background with cinematic pan animation
- Gradient overlay with professional lighting effects
- Responsive design for all screen sizes

### 🔍 Glassmorphism Search Bar
- Beautiful glass-effect search interface
- Fields: Destination, Check-in, Check-out, Guests
- Centered and floating design
- Fully functional date pickers

### 🌍 Global Country Flags
- Circular flag icons for 11 countries:
  - Pakistan 🇵🇰
  - Canada 🇨🇦
  - United States 🇺🇸
  - UAE 🇦🇪
  - United Kingdom 🇬🇧
  - Indonesia 🇮🇩
  - South Africa 🇿🇦
  - Saudi Arabia 🇸🇦
  - Australia 🇦🇺
  - New Zealand 🇳🇿
  - European Union 🇪🇺
- Smooth hover animations
- Interactive filtering

### 🏠 Property Listings
- Responsive grid layout
- Beautiful property cards with:
  - High-quality images
  - Rating system
  - Price per night
  - Location details
  - Review counts
- Hover animations and transitions

### ➕ List Your Property
- Prominent button in navigation
- 4-step modal form:
  1. **Basic Info**: Title, Type, Location, Price
  2. **Details**: Bedrooms, Bathrooms, Guests, Description
  3. **Photos**: Image upload with preview
  4. **Review**: Summary before submission
- Progress indicator
- Form validation
- Image upload functionality

## Design Features

- **Glassmorphism effects** throughout
- **Cinematic lighting** and shadows
- **Minimalist aesthetic** with modern typography
- **Smooth animations** and transitions
- **Responsive design** for mobile, tablet, and desktop
- **Professional color scheme** with gradients
- **High-performance** animations

## Technologies Used

- HTML5
- CSS3 (with modern features like backdrop-filter)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts

## Installation

1. Clone the repository:
```bash
git clone https://github.com/khanrukshanda524-bit/air-bnb.git
```

2. Open `index.html` in your browser

That's it! No build process or dependencies required.

## Customization

### Change Hero Background
Edit the background image URL in `styles.css`:
```css
.hero-background {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url('YOUR_IMAGE_URL_HERE');
}
```

### Add More Properties
Edit the `LISTINGS` array in `script.js`:
```javascript
const LISTINGS = [
  {
    id: "1",
    title: "Your Property Title",
    location: "City, Country",
    price: 250,
    rating: 4.9,
    reviews: 128,
    image: "IMAGE_URL"
  },
  // Add more...
];
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

**Note**: Glassmorphism effects require modern browser support for `backdrop-filter`.

## Features Coming Soon

- Backend integration
- User authentication
- Booking system
- Payment gateway
- Admin dashboard
- Review system
- Search functionality
- Filtering by price, location, amenities

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

Created by Huzaifa

## Repository

https://github.com/khanrukshanda524-bit/air-bnb

---

**Enjoy building your luxury accommodation platform!** ✨
