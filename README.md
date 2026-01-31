# MandiBandhu

An AI-powered negotiation assistant built for local market vendors in India. When a buyer makes an offer, the vendor types or speaks it into MandiBandhu and gets back an instant verdict on whether the price is fair, what the actual market rate is, and a ready-to-use response they can say right back to the buyer — all in their own language.

This is a fully frontend project. No backend, no database, no sign-up. Just open the HTML file in a browser and it works.

---

## The problem it solves

Small vendors in local mandis often don't know the fair market price for what they're selling. Buyers exploit this by offering well below what the product is actually worth. MandiBandhu gives vendors the information and confidence they need to negotiate fairly.

---

## How to run it

Clone the repository or download the zip, then open `index.html` in your browser. That's it. No install step, no build step, nothing else needed.

```
git clone https://github.com/your-username/MandiBandhu.git
cd MandiBandhu
open index.html
```

Works on Chrome, Edge, Firefox, Safari. Chrome or Edge recommended because of voice input support.

---

## Project structure

```
MandiBandhu/
├── index.html              — the app, open this
├── css/
│   └── style.css           — all styling
├── js/
│   ├── translations.js     — UI text and negotiation responses in 6 languages
│   ├── marketData.js       — price database for 19 products across 4 regions and 4 seasons
│   ├── negotiationEngine.js — core logic: language detection, price extraction, offer evaluation
│   └── app.js              — ties everything together: language switching, voice input, results display
└── README.md
```

---

## Supported languages

The entire interface translates when you switch languages — not just the tagline, but every label, button, product name, recommendation text, and the suggested negotiation response.

- English
- Hindi
- Kannada
- Tamil
- Telugu
- Marathi

When you select a language, the product dropdown updates too. It shows bilingual names, for example "Mango (आम)" when Hindi is selected, or "Mango (ಮಾವು)" when Kannada is selected. If English is selected, it shows Hindi as the second language by default.

---

## Products

19 products organised into three groups:

**Vegetables** — Tomato, Onion, Potato, Cabbage, Carrot, Cauliflower, Brinjal, Lady Finger

**Fruits** — Apple, Banana, Mango, Orange, Grapes, Pomegranate, Papaya

**Leafy Greens** — Spinach, Coriander, Mint, Fenugreek

---

## Locations

10 cities mapped to 4 regions. Each region has its own price data.

- North: Delhi, Jaipur, Lucknow
- South: Bangalore, Chennai, Hyderabad
- West: Mumbai, Pune, Ahmedabad
- East: Kolkata

---

## How the analysis works

Everything runs in the browser, no API calls involved.

The vendor enters what the buyer said — in any supported language or even plain English. The app then does the following in sequence:

First it detects the language by checking Unicode character ranges. Kannada, Tamil, Telugu, Bengali each have distinct ranges. Devanagari is shared between Hindi and Marathi, so it checks for Marathi-specific words like "आहे" to tell them apart. If nothing matches, it defaults to English.

Then it figures out the product. It scans the input for product keywords in all six languages. If the vendor already picked a product from the dropdown, that takes priority.

Next it pulls out the price. It looks for currency words like रुपये, ರೂಪಾಯಿ, rupees, or the ₹ symbol near a number. If none of those patterns match, it just takes the last number in the text.

If the price was given for a bulk unit like a crate or a quintal, it converts down to a per-kg figure using standard conversion factors.

It then looks up the fair market price for that product in the correct region and season from the local database, and compares the buyer's offer against three price tiers — distress, fair, and premium — to arrive at a verdict:

- Below distress price: Exploitative, don't accept
- Below 85% of fair price: Low, negotiate upward
- Between 85% and 115% of fair: Reasonable, can accept
- Above 115% of fair: Favorable, accept immediately

Based on the verdict, it picks a response strategy. If the input contains words suggesting the buyer is a regular customer (like "नियमित" or "regular"), it shifts to a softer, relationship-based tone. It then fills in a response template in the selected language with the actual prices and returns it to the vendor.

---

## Voice input

On browsers that support the Web Speech API (mainly Chrome and Edge), the voice button triggers real speech recognition. It sets the recognition language to match whatever language is currently selected in the interface.

If the browser doesn't support it, or if the user declines microphone permission, it falls back to a demo mode. Demo mode loads a pre-written example sentence in the selected language and auto-fills the city field to match.

---

## What the results panel shows

After analysis, the right side of the screen displays:

- A colour-coded recommendation (don't accept / negotiate / good deal / excellent)
- The buyer's offered price per kg
- The current fair market price for that product in that region and season
- A suggested counter-offer price
- How far above or below market the buyer's offer actually is
- A full negotiation sentence the vendor can say or copy, written in whichever language is selected

All of this translates live if you switch languages, even after results are already showing.

---

## Tech stack

Plain HTML, CSS, and JavaScript. No frameworks, no libraries beyond Font Awesome for icons and Google Fonts for typography. Everything that runs in the browser stays in the browser.

---

## Built for

AI for Bharat Challenge 2026
