# Victory Over Yourself (OVYR)

Premium streetwear storefront for OVYR, built around the idea that victory is a daily decision.

## Brand

OVYR stands for Victory Over Yourself.

Everyday uniform for the work nobody sees.

The visual direction is minimal, heavyweight, washed, and editorial, with a focus on premium essentials rather than trend-driven pieces.

## Drop 001: The First Three

- Statement Tee: washed black heavyweight tee with OVYR / Victory Over Yourself branding
- Essential Tee: stone and washed black minimal OVYR tees
- Micro Fleece Set: black full-zip hoodie and sweatpant set

## Tech

- Next.js 15
- React 19
- TypeScript
- Lucide React
- Netlify

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Product photography

Production product imagery lives in `public/products/`.

Use the original full-resolution product exports for storefront photography. Do not replace them with screenshots, thumbnails, or heavily compressed derivatives. Product cards intentionally crop images responsively with CSS.

Expected high-resolution assets:

- `public/products/statement.jpg`
- `public/products/essential.jpg`
- `public/products/fleece.jpg`

Temporary compressed `.webp` assets may exist during development but should not be used for the production storefront once the original JPEGs are present.

## Deployment

The repository is connected to Netlify and deploys from `main`.

Live site: https://victoryoveryou.netlify.app

To avoid unnecessary builds, batch changes locally or in a single commit before pushing to `main`.

## Status

Storefront foundation is live. Current priority is production-quality product imagery and refinement of the Drop 001 shopping experience.

© 2026 OVYR / Victory Over Yourself.
