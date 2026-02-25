# Power Gym — Next.js 14 Gym Website

Modern multi-page gym website built with Next.js App Router, Tailwind CSS, shadcn-style UI components, Framer Motion animations, and React Hook Form + Zod validation.

## Tech Stack
- Next.js 14 (App Router + TypeScript)
- Tailwind CSS
- Framer Motion
- shadcn/ui-style component structure
- React Hook Form + Zod

## Pages
- `/` Home page with Hero, About, Services, Testimonials, Pricing
- `/trainers` Trainer profiles
- `/contact` Contact info, booking form, and Google Maps embed

## Quick Start
1. Install dependencies:
   npm install
2. Run development server:
   npm run dev
3. Open:
   http://localhost:3000

## Build for Production
1. Build app:
   npm run build
2. Start production server:
   npm run start

## Deploy on Vercel
1. Push this repository to GitHub.
2. Import project into Vercel.
3. Keep defaults (Framework: Next.js).
4. Click Deploy.

Vercel will automatically run `npm run build` and host your site.

## Notes
- Update business details in `app/contact/contact.tsx`.
- Replace image URLs in `components/sections/hero.tsx` and `app/trainers/trainers.tsx` with brand photos.
- Update SEO metadata in `app/layout.tsx`, `app/trainers/page.tsx`, and `app/contact/page.tsx`.
