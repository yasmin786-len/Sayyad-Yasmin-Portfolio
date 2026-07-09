# Sayyad Yasmin — Portfolio

A personal developer portfolio built with **React 19**, **Vite**, **JavaScript**, **Framer Motion**, **React Icons**, and **EmailJS**.

This is a from-scratch rebuild of the original TanStack Start / Lovable-generated project. All TypeScript, SSR, server files, and routing (TanStack Router) have been removed — this is a plain client-side single-page app. Every `.tsx`/`.ts` file was replaced with an equivalent `.jsx`/`.js` file, and the UI, layout, colors, animations, and responsive behavior are preserved exactly using the original hand-written `portfolio.css` file (which was always plain CSS, not Tailwind).

## Tech stack

- React 19
- Vite 8
- Plain JavaScript (no TypeScript)
- Plain CSS (`src/styles/portfolio.css`)
- Framer Motion (scroll reveals, hover/tap animations, cursor-follow blob, modals)
- React Icons (`react-icons/fi`, `fa6`, `si`, `tb`)
- EmailJS (`@emailjs/browser`) for the contact form

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`) in your browser.

## Build

```bash
npm run build
npm run preview
```

The production build is emitted to `dist/`.

## Deploying to Vercel

This is a standard Vite SPA — Vercel auto-detects it. Just import the repo in Vercel and deploy; no additional configuration is required (a `vercel.json` is included for clarity, but isn't strictly necessary).

## Project structure

```
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── resume.pdf
│   └── robots.txt
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx                # Renders <Portfolio />
    ├── index.css               # Minimal global reset
    ├── assets/                 # Hero + About images
    ├── styles/
    │   └── portfolio.css       # All portfolio styling (unchanged)
    └── components/portfolio/
        ├── Portfolio.jsx       # Page composition
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Certificates.jsx
        ├── Achievements.jsx
        ├── Resume.jsx
        ├── Contact.jsx          # EmailJS-powered contact form
        ├── Footer.jsx
        ├── shared.jsx           # Reveal / SectionHead helpers
        └── data.js               # All portfolio content (profile, skills, projects, etc.)
```

## Notes

- Navigation is done via in-page smooth scrolling + `IntersectionObserver` (no router needed — this was always a single page).
- The `@` import alias points to `src/` (configured in `vite.config.js` and `jsconfig.json`), matching the original project's import style (`@/assets/...`, `@/styles/...`).
- EmailJS service ID, template ID, and public key are already wired up in `Contact.jsx` exactly as in the original project.
