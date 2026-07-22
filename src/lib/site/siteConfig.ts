// /src/lib/config/siteConfig.ts

export const siteConfig = {
  // 1. Visual Identity & Branding (Elegante & Natural)
  brand: {
    name: "Hotel Anturio",
    suffix: "Lorem Ipsum Dolor", 
    logo: "/icon.png", 
    theme: "elegant-nature", 
    colors: {
      primary: "#2C5E43",   
      secondary: "#D4AF37", 
      accent: "#8B5A2B",    
      background: "#FAFAF6" 
    },
    city: "Lorem Ipsum",
    province: "Dolor Sit Amet",
    address: "Consectetur Adipiscing Elit 123",
  },

  // 2. Main Content (Hero Section Genérica)
  hero: {
    badge: "🌿 Lorem ipsum dolor sit",
    title: "HOTEL ANTURIO",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Lorem Ipsum",
    bgImage: "https://unsplash.com", 
  },

  // Categorías Genéricas con Emojis para mantener el layout
  categories: [
    "Lorem 🛏️", 
    "Ipsum 🧖‍♀️", 
    "Dolor 🍽️", 
    "Sit 🚣‍♂️",
    "Amet 🏊‍♂️"
  ],

  // 3. E-commerce Features & Business Data (Estructura Genérica)
  features: {
    hasFilters: true,
    hasCart: true, 
    whatsappNumber: "+5493446123456",
    deliveryInfo: "✨ Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    openingHours: "Lorem: 00:00 - 00:00 | Ipsum: 00:00 - 00:00"
  },

  // 4. DATABASE CONNECTION
  databaseUrl: "https://google.com",
};
