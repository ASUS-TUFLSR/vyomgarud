# VyomGarud — Landing Page (React + Vite + Tailwind)


A modern, dark, military/futuristic single-page landing for VyomGarud (UAV / drone systems). Ready-to-run with Vite and Tailwind CSS. Focus is on a clean, confident brand identity, responsive layout, and subtle animations.


## Features
- Hero, About, Capabilities (product cards), Highlights, Contact/Footer
- Tailwind CSS utility-first styling
- Framer Motion for subtle hero animation
- Dark, charcoal + orange (#ff7b00) color palette
- Mobile-first responsive layout


## Quick start
1. Clone or copy files into a new directory.
2. Install dependencies:


```bash
npm install
```


3. Run dev server:


```bash
npm run dev
```


4. Build for production:


```bash
npm run build
```


5. Preview production build:


```bash
npm run preview
```


## Deployment
This project builds to a `dist/` folder. Deploy to Vercel, Netlify, or GitHub Pages. For Vercel — just link the repo and set framework to "Vite" (or detect automatically). For Netlify, use `npm run build` as build command and `dist` as publish folder.


## Design Notes
- Fonts: Inter + Poppins (via Google Fonts in `index.html`).
- Colors: `#111`/charcoal background, `#ff7b00` accent.
- Aesthetic: military-grade, professional and modern. Keep copy concise and assertive.
- Accessibility: contrast is high, focus-visible preserved (you can add improved focus styles as needed).


## Where to improve / Bonus ideas for Future Improvements
- Add a CMS or Netlify Forms for real contact handling.
- Add animation sequencing and scroll reveals.
- Add more pages (Datasheets, Case Studies) and protected admin area.
- Replace demo SVG with product renders or hero video.
