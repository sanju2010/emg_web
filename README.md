# EAT MOVE GROW
## Premium South Indian Homemade Sweets & Snacks Website

A complete, modern, mobile-first website for **Eat Move Grow**, specializing in authentic South Indian homemade sweets and savouries. Built with React, TypeScript, Vite, and Lucide React icons, featuring full English and Telugu bilingual support, WhatsApp & phone ordering, an interactive product catalogue, festival and bulk order flows, and a food gallery.

---

## 📁 Project Structure

```
chinni-website/
├── public/
│   ├── images/
│   │   ├── hero-assortment.jpeg      # Grand South Indian feast thali
│   │   ├── mysore-pak.jpeg           # Ghee Mysore Pak blocks
│   │   ├── boondi-laddu.jpeg         # Golden Boondi Laddus
│   │   ├── chekkalu.jpeg             # Crispy Pappu Chekkalu
│   │   ├── south-indian-mixture.jpeg # Savoury South Indian Mixture
│   │   ├── kitchen-prep.jpeg         # Brass uruli sweet crafting in kitchen
│   │   ├── festive-gifting.jpeg      # Eco-friendly kraft gift boxes & diyas
│   │   ├── ariselu.jpeg              # Traditional Nethi Ariselu
│   │   ├── ragi-laddu.jpeg           # Homemade Ragi Laddu
│   │   ├── ragi-garelu.jpeg          # Crispy Ragi Garelu
│   │   ├── murukulu.jpeg             # Traditional Murukulu spirals
│   │   └── besan-mixture-peanuts.jpeg# Besan Mixture with peanuts
│   ├── robots.txt                    # Search engine crawlers config
│   ├── sitemap.xml                   # Multilingual XML sitemap
│   └── _redirects                    # Netlify single-page redirect rule
├── data/
│   └── Catelogue - Sheet1.csv        # Source products & weights sheet
├── src/
│   ├── config/
│   │   └── business.ts               # Central business contact & brand settings
│   ├── utils/
│   │   ├── whatsapp.ts               # WhatsApp & phone ordering utilities
│   │   └── validation.ts             # Form validation (Indian mobile, email)
│   ├── i18n/
│   │   ├── types.ts                  # TypeScript translation schema
│   │   ├── en.ts                     # English UI content & copy
│   │   ├── te.ts                     # Authentic Telugu Unicode translations
│   │   └── LanguageContext.tsx       # React context for instant language toggle
│   ├── data/
│   │   ├── categories.ts             # Product categories & image links
│   │   ├── products.ts               # 20+ authentic products with package sizes & prices
│   │   ├── gallery.ts                # Food photography gallery items & categories
│   │   └── testimonials.ts           # Customer testimonials with clear sample labels
│   ├── components/
│   │   ├── Header/Header.tsx         # Sticky navigation with mobile drawer & language switcher
│   │   ├── Footer/Footer.tsx         # Brand footer with quick links, contact, and legal
│   │   ├── ProductCard/              # Product card with price, category badge, and quick WhatsApp enquire
│   │   ├── ProductGrid/              # Responsive 1 to 4 column product grid
│   │   ├── CategoryCard/             # Visual category card with explore action
│   │   ├── ProductFilters/           # Category chips, search bar, and A-Z/price sorting
│   │   ├── ProductModal/             # Product detail modal with package sizes, prices & CTAs
│   │   ├── BulkOrderModal/           # Festival & bulk order form with event types
│   │   ├── EnquiryForm/              # Customer lead form with validation & WhatsApp redirect
│   │   ├── GalleryLightbox/          # High-resolution food photo lightbox
│   │   ├── TestimonialCard/          # Star rating and customer review card
│   │   ├── LanguageSwitcher/         # English / తెలుగు toggle
│   │   ├── WhatsAppButton/           # Floating bottom-right WhatsApp quick order widget
│   │   └── CallButton/               # Floating mobile call button (tel:)
│   ├── pages/
│   │   ├── Home/HomePage.tsx         # Complete single-page home layout
│   │   ├── LegalPage.tsx             # Privacy Policy & Terms of Use
│   │   └── legal.css                 # Policy pages styling
│   ├── styles/
│   │   ├── theme.css                 # Brand color tokens, typography & CSS variables
│   │   └── index.css                 # Responsive stylesheet & animations
│   ├── App.tsx                       # Root application coordinator
│   └── main.tsx                      # Vite React entry point
├── index.html                        # SEO meta, Noto Sans Telugu font, Schema JSON-LD
├── package.json                      # Dependencies and scripts
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
# or
npm start
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript checking (`tsc -b`) and generates optimized production assets in `dist/`.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## ⚙️ How to Update Business Details (Phone & WhatsApp)

All contact details and brand settings are centralized in one file:

👉 [src/config/business.ts](file:///Users/sanjeev/workspace2/chinni-website/src/config/business.ts)

```typescript
export const business = {
  name: 'Eat Move Grow',
  shortName: 'eat move grow',
  tagline: 'Authentic Taste. Homemade Goodness.',
  taglineTe: 'నిజమైన రుచి. ఇంటి స్వచ్ఛత.',
  whatsappNumber: '919876543210',  // Digits only with country code
  phone: '+91 98765 43210',        // Display format
  rawPhone: '+919876543210',       // tel: link format
  email: 'contact@eatmovegrow.com',
  address: 'South India, India',
  hours: 'Mon – Sun: 9:00 AM – 8:00 PM',
  instagram: 'https://instagram.com/eatmovegrow',
  facebook: 'https://facebook.com/eatmovegrow',
  currency: '₹',
  currencyCode: 'INR',
}
```

When you update these values, every button on the site (`Order on WhatsApp`, `Call Now`, header CTAs, floating widgets, and contact cards) automatically updates.

---

## 🍬 How to Add or Update Products

Product definitions are located in:

👉 [src/data/products.ts](file:///Users/sanjeev/workspace2/chinni-website/src/data/products.ts)

To add a new product, append an entry to the `products` array:

```typescript
{
  id: 'dry-fruit-mysore-pak',
  nameEn: 'Pista Cashew Mysore Pak',
  nameTe: 'పిస్తా కాజు మైసూర్ పాక్',
  categoryId: 'traditional-sweets',
  categoryNameEn: 'Traditional Sweets',
  categoryNameTe: 'సాంప్రదాయ మిఠాయిలు',
  descriptionEn: 'Rich melt-in-mouth Mysore Pak topped with slivers of Iranian pista and cashew nuts.',
  descriptionTe: 'పిస్తా మరియు జీడిపప్పు పలుకులతో చేసిన రాచరికపు నేతి మైసూర్ పాక్.',
  image: '/images/mysore-pak.jpeg',
  prices: { '250g': 240, '500g': 480, '1kg': 950 }, // Or omit and set contactForPrice: true
  contactForPrice: false,
  ingredientsEn: 'Pure cow ghee, gram flour, sugar, pistachios, cashews, cardamom.',
  ingredientsTe: 'స్వచ్ఛమైన ఆవు నెయ్యి, శనగపిండి, చక్కెర, పిస్తా, జీడిపప్పు, యాలకులు.',
  availabilityEn: 'Made fresh upon order.',
  availabilityTe: 'ఆర్డర్ మేరకు తాజాగా తయారుచేయబడును.',
  packageSizes: ['250g', '500g', '1kg'],
  featured: true, // Set to true to display on homepage signature highlights
}
```

---

## 📸 How to Replace Food Images with Real Photographs

1. Place your compressed `.jpg` or `.png` photographs in `public/images/`.
2. Keep file names consistent or update the path in:
   - [src/data/products.ts](file:///Users/sanjeev/workspace2/chinni-website/src/data/products.ts) (for product items)
   - [src/data/categories.ts](file:///Users/sanjeev/workspace2/chinni-website/src/data/categories.ts) (for category cards)
   - [src/data/gallery.ts](file:///Users/sanjeev/workspace2/chinni-website/src/data/gallery.ts) (for the food gallery & lightbox)
3. For best web performance, size photos around **800×600px** (or **1200×800px** for hero/lightbox) at under **250KB** per image.

---

## 🌐 How to Update Telugu & English Translations

UI translations are cleanly decoupled in separate dictionary files:

- **English dictionary**: [src/i18n/en.ts](file:///Users/sanjeev/workspace2/chinni-website/src/i18n/en.ts)
- **Telugu dictionary**: [src/i18n/te.ts](file:///Users/sanjeev/workspace2/chinni-website/src/i18n/te.ts)
- **Schema & Types**: [src/i18n/types.ts](file:///Users/sanjeev/workspace2/chinni-website/src/i18n/types.ts)

Both dictionaries share the identical TypeScript interface (`TranslationDictionary`), so if any translation key is missing or mistyped, TypeScript catches it immediately at build time.

---

## 🚢 Deployment Instructions

### Deploy to Netlify
1. Create a repository on GitHub and push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial Eat Move Grow website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Log in to [Netlify](https://app.netlify.com).
3. Click **Add new site** > **Import an existing project** > **GitHub**.
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. The included `public/_redirects` file automatically handles single-page app routing.

### Deploy to Vercel
1. Log in to [Vercel](https://vercel.com) and click **Add New** > **Project**.
2. Select your repository.
3. Framework Preset: **Vite**.
4. Build and Output Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
