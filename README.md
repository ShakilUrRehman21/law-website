# Sarfaraz Hussain Advocate & Associates — Official Law Firm Web Platform

> A high-performance, editorial legal web application inspired by luxury Framer design aesthetics (Lawcrest theme). Engineered with React 19, Vite, Lenis smooth scrolling, and a vanilla CSS design system.

---

## 🏛️ About The Firm & Platform

This platform serves as the premier digital presence for **Advocate Sarfaraz Hussain** (Advocate, Supreme Court of India & Delhi High Court) and his associated legal counsel across Delhi & NCR.

The application delivers an authoritative, high-trust experience designed to reflect decades of courtroom litigation excellence, statutory rigor, and client defense.

### ✨ Key Features & Architectural Highlights

1. **Lawcrest Editorial Design Language**:
   - **Deep Obsidian & Warm Cream Palette**: High-contrast dark sections (`#090909`) paired with warm editorial cream surfaces (`#f4f1ea`).
   - **Iridescent Metallic Foil Typography**: Editorial serif headings (`Playfair Display`) with dynamic bronze-gold metallic gradient fills.
   - **Modern Clean Sans**: Body typography powered by `Plus Jakarta Sans` for maximum readability.

2. **Butter-Smooth Momentum Scrolling (Lenis)**:
   - Integrated with **Lenis Smooth Scroll** for a continuous, luxurious scroll feeling throughout all pages.

3. **Non-Overlapping Clean Hero Section**:
   - Split layout with bold value proposition on the left and a framed, normal rectangular portrait of Advocate Sarfaraz Hussain on the right with zero text collision.

4. **One-at-a-Time Practice Areas Carousel**:
   - Displays single focused practice area slides at a time.
   - Functional **Next** and **Previous** navigation arrow buttons with slide counters (`01 / 05`) and interactive jump pills.
   - Covers: Criminal Litigation, Civil Litigation, Family Law, MACT & Consumer Cases, and Waqf & Property Law.

5. **Senior-Developer Interactive Attorney Showcase**:
   - **Category Filter Pills**: Quickly filter between All Counsel, Senior Advocates, and Associates.
   - **Spotlight Dossier**: Interactive profile inspector highlighting court admissions, standing, specialization, and direct chamber call / WhatsApp actions.
   - **Framer-Inspired Tilted Cards Deck**: Subtle organic card rotation that straightens up on hover with interactive action bars.

6. **Bar Council of India Compliance**:
   - Pre-entry disclaimer modal fully complying with the rules of the Bar Council of India regarding legal information dissemination.
   - Persistent client agreement state via `localStorage`.

7. **Multi-Chamber Contact & Consultation**:
   - Direct integration for Delhi High Court Chamber Block-I and South Delhi Batla House office.
   - Interactive consultation request form with advocate-client privilege notice.
   - Floating WhatsApp direct chat action.

---

## 🛠️ Tech Stack

* **Core**: React 19
* **Build Tool**: Vite 5
* **Routing**: React Router DOM v7
* **Icons**: Lucide React
* **Smooth Scrolling**: Lenis
* **Styling**: Vanilla CSS3 Design Tokens (CSS Variables, Flexbox, CSS Grid)
* **Fonts**: Google Fonts (`Playfair Display`, `Plus Jakarta Sans`)

---

## 📁 Project Structure

```
sarfaraz-law/
├── public/                 # Static portraits & courtroom photography
│   ├── sarfaraz_hussain.png
│   ├── mf_khan.png
│   ├── ali.png
│   ├── sabahat.png
│   ├── anita.png
│   ├── affan.png
│   ├── zaki.png
│   ├── hero-logo.png
│   ├── gallery-1.jpg
│   └── gallery-2.jpg
├── src/
│   ├── components/         # Global header, footer, modal, WhatsApp button
│   │   ├── Header.jsx & Header.css
│   │   ├── Footer.jsx & Footer.css
│   │   ├── DisclaimerModal.jsx & DisclaimerModal.css
│   │   ├── WhatsAppButton.jsx & WhatsAppButton.css
│   │   ├── Layout.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/              # Primary route views
│   │   ├── Home.jsx & Home.css
│   │   ├── About.jsx & About.css
│   │   ├── Services.jsx & Services.css
│   │   ├── PracticeAreas.jsx & PracticeAreas.css
│   │   ├── Gallery.jsx & Gallery.css
│   │   └── Contact.jsx & Contact.css
│   ├── App.jsx             # Routes & Lenis initialization
│   ├── index.css           # Global design tokens & utility classes
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ShakilUrRehman21/lawWebsite.git
cd lawWebsite/sarfaraz-law
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 👨‍💻 Developed By

**Shakil Ur Rehman**  
Full Stack Developer