/* ============================================================
   data.js  —  Single source of truth shared by:
               index.html  →  script.js
               property-detail.html  →  property-detail.js
   All objects are globals (window.*) for plain-HTML use.
============================================================ */

/* ----------------------------------------------------------
   COUNTRIES  (flag bar)
---------------------------------------------------------- */
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

/* ----------------------------------------------------------
   locationData  —  STRICT per-country mapping.
   keywords : location strings that MUST appear in listing.location
   backgroundImages : 6 unique "famous spot" images for that country ONLY
---------------------------------------------------------- */
const locationData = {

  UAE: {
    label: "United Arab Emirates",
    keywords: ["UAE", "Dubai", "Abu Dhabi", "Sharjah"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900", // Burj Khalifa at night
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=900", // Dubai Marina
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=900", // Arabian desert dunes
      "https://images.unsplash.com/photo-1548254559-eab9c2e72a59?w=900",    // Palm Jumeirah aerial
      "https://images.unsplash.com/photo-1617634975524-c9cc9e7e9144?w=900", // Burj Al Arab
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=900"  // Dubai Frame skyline
    ]
  },

  USA: {
    label: "United States",
    keywords: ["USA", "New York", "Los Angeles", "Chicago", "San Francisco", "Miami", "Las Vegas"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805785?w=900", // Times Square NYC
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900", // Golden Gate Bridge SF
      "https://images.unsplash.com/photo-1553901753-215db344677a?w=900",    // Manhattan skyline
      "https://images.unsplash.com/photo-1538681105935-af2c4b6b55e0?w=900", // Statue of Liberty
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900", // Chicago architecture
      "https://images.unsplash.com/photo-1499092346682-84540ab3e978?w=900"  // Times Square night
    ]
  },

  AUSTRALIA: {
    label: "Australia",
    keywords: ["Australia", "Sydney", "Melbourne", "Brisbane", "Perth", "Gold Coast"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900", // Sydney Opera House
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=900", // Great Barrier Reef
      "https://images.unsplash.com/photo-1527494397072-c2b8a2dd1fa3?w=900", // Sydney Harbour Bridge
      "https://images.unsplash.com/photo-1531889954489-af8872d64252?w=900", // Uluru (Ayers Rock)
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=900",    // Bondi Beach
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900"  // Blue Mountains
    ]
  },

  UK: {
    label: "United Kingdom",
    keywords: ["UK", "London", "Manchester", "Edinburgh", "Birmingham", "Glasgow"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900", // Tower Bridge London
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=900", // Big Ben Westminster
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=900", // Buckingham Palace
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=900", // Scottish Highlands
      "https://images.unsplash.com/photo-1543832923-44667a44c804?w=900",    // London Eye
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=900"  // Oxford University
    ]
  },

  PAKISTAN: {
    label: "Pakistan",
    keywords: ["Pakistan", "Islamabad", "Lahore", "Karachi", "Hunza", "Skardu", "Peshawar"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=900", // Badshahi Mosque Lahore
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=900", // Hunza Valley
      "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=900", // K2 & Karakoram
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=900",    // Lahore Fort
      "https://images.unsplash.com/photo-1573142959-4f2e4bfb6767?w=900",    // Skardu lake
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900"  // Islamabad landscape
    ]
  },

  SOUTH_AFRICA: {
    label: "South Africa",
    keywords: ["South Africa", "Cape Town", "Johannesburg", "Durban", "Pretoria"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=900", // Table Mountain
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=900",    // Cape Point
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=900", // Cape Town waterfront
      "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?w=900", // Safari savanna
      "https://images.unsplash.com/photo-1565620551738-9ba2e9b80d85?w=900", // Stellenbosch winery
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900"  // Kruger Park wildlife
    ]
  },

  CANADA: {
    label: "Canada",
    keywords: ["Canada", "Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=900", // Niagara Falls
      "https://images.unsplash.com/photo-1476514525405-8ae7e8b3d297?w=900", // Banff National Park
      "https://images.unsplash.com/photo-1547185735-b79c5e6f59f5?w=900",    // CN Tower Toronto
      "https://images.unsplash.com/photo-1562774053-701939374585?w=900",    // Vancouver skyline
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=900", // Northern Lights
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=900"  // Quebec City winter
    ]
  },

  INDONESIA: {
    label: "Indonesia",
    keywords: ["Indonesia", "Bali", "Jakarta", "Lombok", "Yogyakarta", "Komodo"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900", // Bali rice terraces
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900",    // Borobudur temple
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=900",    // Komodo island
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900", // Raja Ampat
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=900", // Bali temple gates
      "https://images.unsplash.com/photo-1570789836662-83f62cbddc2e?w=900"  // Indonesian beach
    ]
  },

  SAUDI_ARABIA: {
    label: "Saudi Arabia",
    keywords: ["Saudi Arabia", "Riyadh", "Jeddah", "Mecca", "Medina", "Al-Ula"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=900", // Al-Masjid al-Haram
      "https://images.unsplash.com/photo-1622188028200-8f04c14a0394?w=900", // Al-Ula desert
      "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=900", // Riyadh skyline
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=900", // Edge of the World
      "https://images.unsplash.com/photo-1473816155817-21a05ab1af7b?w=900", // Arabian sand dunes
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900"  // Saudi traditional architecture
    ]
  },

  NEW_ZEALAND: {
    label: "New Zealand",
    keywords: ["New Zealand", "Auckland", "Wellington", "Queenstown", "Rotorua", "Christchurch"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1469521669194-babb45599def?w=900", // Milford Sound
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=900", // Mount Cook Aoraki
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900", // Fiordland NZ
      "https://images.unsplash.com/photo-1581888227599-779811939961?w=900", // Rotorua geothermal
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900",    // NZ coastline
      "https://images.unsplash.com/photo-1565358399906-3e1e7b06e1b9?w=900"  // Hobbiton Shire
    ]
  },

  EU: {
    label: "European Union",
    keywords: ["France", "Italy", "Germany", "Spain", "Greece", "Paris", "Rome", "Barcelona", "Amsterdam", "Prague", "Vienna", "Lisbon"],
    backgroundImages: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900", // Eiffel Tower Paris
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=900", // Colosseum Rome
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900", // Santorini Greece
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900", // Amsterdam canals
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900", // Prague Castle
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900"  // Sagrada Familia Barcelona
    ]
  }
};

/* ----------------------------------------------------------
   LISTINGS  —  All property data with images[] + reviews[] + amenities[]
   locationKey must exactly match a key in locationData above.
---------------------------------------------------------- */
const LISTINGS = [
  {
    id: "1",
    locationKey: "UAE",
    title: "Luxury Apartment in Downtown Dubai",
    location: "Dubai, UAE",
    price: 250,
    rating: 4.9,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    description: "A glass-wrapped luxury suite with panoramic views of the Burj Khalifa and the Dubai Fountain. Featuring floor-to-ceiling windows, a private infinity pool terrace, and concierge service 24/7. Located in the heart of Downtown Dubai, steps from the Dubai Mall, world-class restaurants, and the finest shopping in the Middle East.",
    amenities: [
      { icon: "fa-wifi",         label: "High-Speed WiFi" },
      { icon: "fa-swimming-pool",label: "Infinity Pool" },
      { icon: "fa-snowflake",    label: "Air Conditioning" },
      { icon: "fa-utensils",     label: "Gourmet Kitchen" },
      { icon: "fa-parking",      label: "Valet Parking" },
      { icon: "fa-dumbbell",     label: "Gym Access" },
      { icon: "fa-concierge-bell", label: "24/7 Concierge" },
      { icon: "fa-tv",           label: "Smart TV" }
    ],
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
    locationKey: "USA",
    title: "Modern Loft in Manhattan",
    location: "New York, USA",
    price: 320,
    rating: 4.8,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    description: "Ultra-minimal SoHo loft with double-height windows, exposed brick, and a private rooftop terrace overlooking the Hudson River. Walking distance to world-class dining and galleries. This converted industrial space blends original character with modern luxury — polished concrete floors, custom furniture, and a chef's kitchen.",
    amenities: [
      { icon: "fa-wifi",         label: "Gigabit WiFi" },
      { icon: "fa-utensils",     label: "Chef's Kitchen" },
      { icon: "fa-tv",           label: "Smart TV" },
      { icon: "fa-snowflake",    label: "Air Conditioning" },
      { icon: "fa-tshirt",       label: "In-unit Washer" },
      { icon: "fa-building",     label: "Rooftop Access" },
      { icon: "fa-lock",         label: "Keyless Entry" },
      { icon: "fa-coffee",       label: "Coffee Station" }
    ],
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
    locationKey: "AUSTRALIA",
    title: "Beachfront Villa in Sydney",
    location: "Sydney, Australia",
    price: 450,
    rating: 5.0,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    description: "Wake up to the sound of waves in this stunning beachfront villa with direct access to Bondi Beach. Features a private deck, outdoor shower garden, and breathtaking views of Sydney Harbour. Three sun-soaked bedrooms, an open-plan living area facing the ocean, and a BBQ deck perfect for golden-hour dining.",
    amenities: [
      { icon: "fa-wifi",         label: "High-Speed WiFi" },
      { icon: "fa-umbrella-beach", label: "Beach Access" },
      { icon: "fa-swimming-pool", label: "Private Pool" },
      { icon: "fa-utensils",     label: "Full Kitchen" },
      { icon: "fa-parking",      label: "Free Parking" },
      { icon: "fa-fire",         label: "BBQ Grill" },
      { icon: "fa-snowflake",    label: "Air Conditioning" },
      { icon: "fa-tv",           label: "Smart TV" }
    ],
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
    locationKey: "UK",
    title: "Historic Apartment in London",
    location: "London, UK",
    price: 280,
    rating: 4.7,
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    description: "A converted Victorian warehouse loft with exposed beams, floor-to-ceiling windows overlooking the Thames, and original period features combined with modern luxury amenities. Located in the vibrant South Bank, steps from the Tate Modern, Borough Market, and London Bridge — culture and cuisine at your doorstep.",
    amenities: [
      { icon: "fa-wifi",         label: "Fibre Broadband" },
      { icon: "fa-utensils",     label: "Full Kitchen" },
      { icon: "fa-tshirt",       label: "Washer & Dryer" },
      { icon: "fa-tv",           label: "Smart TV" },
      { icon: "fa-coffee",       label: "Nespresso Machine" },
      { icon: "fa-thermometer-half", label: "Central Heating" },
      { icon: "fa-lock",         label: "Secure Entry" },
      { icon: "fa-suitcase",     label: "Luggage Storage" }
    ],
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
    locationKey: "PAKISTAN",
    title: "Mountain View Chalet in Islamabad",
    location: "Islamabad, Pakistan",
    price: 120,
    rating: 4.9,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    description: "A sun-drenched chalet overlooking the Margalla Hills with a private plunge pool, lush landscaped gardens, and panoramic mountain views. The perfect blend of luxury and raw nature. Every morning brings misty hill views and birdsong; evenings are lit by stars unpolluted by city light.",
    amenities: [
      { icon: "fa-wifi",         label: "High-Speed WiFi" },
      { icon: "fa-swimming-pool",label: "Plunge Pool" },
      { icon: "fa-utensils",     label: "Full Kitchen" },
      { icon: "fa-parking",      label: "Private Parking" },
      { icon: "fa-fire",         label: "Fireplace" },
      { icon: "fa-seedling",     label: "Garden" },
      { icon: "fa-snowflake",    label: "Air Conditioning" },
      { icon: "fa-tv",           label: "Smart TV" }
    ],
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
    locationKey: "SOUTH_AFRICA",
    title: "Coastal Retreat in Cape Town",
    location: "Cape Town, South Africa",
    price: 180,
    rating: 4.8,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    description: "A dramatic cliffside villa with Table Mountain as your backdrop and the Atlantic Ocean at your feet. Features a heated infinity pool, optional private chef service, and a sweeping sunset lounging deck. This is Cape Town at its most spectacular — a home that earns gasps from every guest the moment they step through the door.",
    amenities: [
      { icon: "fa-wifi",         label: "High-Speed WiFi" },
      { icon: "fa-swimming-pool",label: "Heated Pool" },
      { icon: "fa-utensils",     label: "Chef's Kitchen" },
      { icon: "fa-parking",      label: "Secure Parking" },
      { icon: "fa-fire",         label: "BBQ Deck" },
      { icon: "fa-snowflake",    label: "Air Conditioning" },
      { icon: "fa-concierge-bell", label: "Private Chef (on request)" },
      { icon: "fa-tv",           label: "Home Cinema" }
    ],
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
