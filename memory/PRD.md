# ArchtiX — PRD

## Original Problem Statement
Motion website for ArchtiX - Architect & Interior Designers (Gokak). Premium/elegant like Apple Vision Pro; design & motion modeled on https://halston-architecture-template.webflow.io/. Founders: Ar. Akshay Varadai, Er. Ashish Varadai. Services: Planning, Interior Design, Construction, 3D Walkthrough, ACP Design, Turnkey Project. Address: Varadai Complex, Vivekanand Nagar A1 Cross, Gokak - 591307.

## User Choices
- Multi-page site (Home, About, Services, Projects, Contact) with page transitions
- Contact form saves inquiries to DB only (no email)
- Stock imagery placeholder (user will replace with real photos later)
- User will upload logo later (minimal "ArchtiX" wordmark placeholder in use)
- Stack: React + Tailwind + Framer Motion + FastAPI + MongoDB

## Architecture
- Backend: FastAPI (`/app/backend/server.py`) — POST/GET `/api/inquiries` (Inquiry: name, email, phone, service, message), MongoDB via motor
- Frontend: React 19 + react-router-dom + framer-motion
  - `src/data/content.js` — all site copy/images (services, projects, testimonials, founders, stats, address)
  - `src/components/site/motion.jsx` — Reveal, LetterReveal, ParallaxImage, ClipReveal, PageWrap, Marquee (CSS)
  - `src/components/site/Nav.jsx`, `Footer.jsx`
  - `src/pages/` — Home, About, Services, Projects, Contact
- Design: `/app/design_guidelines.json` — Light editorial luxury; Cormorant Garamond + Manrope; #F8F7F5 bg, #111 ink

## Implemented (Jun 2026)
- [x] 5 pages with fade/translate page transitions, glassmorphic fixed nav, mobile menu
- [x] Halston-style motion: word-stagger hero reveals, clip-path image reveals, parallax images, CSS marquee, hover zoom, plus-icon service rows
- [x] Home: hero, stats, philosophy, marquee, services list, founders quote, featured projects, testimonials, CTA banner
- [x] About: founders section (both brothers), values, stats
- [x] Services: 6 alternating service blocks with imagery
- [x] Projects: 4 placeholder projects (staggered grid)
- [x] Contact: minimalist underline-input form → saves to MongoDB, success state, validation, toast
- [x] Footer with address, service links, copyright
- [x] Testing: iteration_1 — backend 6/6, frontend 100%, zero console errors

## Backlog
- P0: Replace placeholder logo with user's uploaded logo; replace stock images with real project photos when provided
- P1: Admin view for inquiries (currently only via GET /api/inquiries); WhatsApp/phone quick-contact buttons; Google Map embed on Contact
- P2: Project detail pages; journal/blog section; rate limiting on inquiry endpoint; SEO meta tags/OG images

## Next Tasks
1. Await user's logo upload → swap wordmark
2. Real project photos → update content.js
3. Optional inquiry admin dashboard
