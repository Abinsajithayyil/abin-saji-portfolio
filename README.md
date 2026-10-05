# Abin Saji Portfolio

Suggested repository name: `abin-saji-portfolio`

## Overview
A single-page portfolio for Abin Saji, a B.Tech Computer Science student targeting entry-level software development, AI/ML and data science roles. The hero shows an object printing layer by layer, a nod to the AI-based 3D printing project, and projects come first so recruiters see them quickly. All content comes from the candidate's resume and LinkedIn profile.

## Tech stack
Next.js 14 (App Router), React 18, Tailwind CSS 3, `next/font` (Bricolage Grotesque, IBM Plex Sans). No API keys or environment variables.

## Run locally
Requires Node.js 18.17 or newer and an internet connection (fonts are fetched by `next/font`).

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check run `npm run build && npm start`.

## Customize
- **Content:** edit `data/profile.js` (name, tagline, projects, experience, skills, certifications, links). Add a `link` to a project to show a "View source" link, or `cgpa` to `education` to display it.
- **Resume:** replace `public/Abin_Saji_Resume.pdf` with a newer file of the same name.
- **Colors:** change the CSS variables at the top of `app/globals.css` (light and `.dark` themes).
- **Fonts:** swap the two font imports in `app/layout.jsx`.
- **Sections:** reorder or remove them in `app/page.jsx`.

## Structure
```
abin-saji-portfolio/
├── app/ (layout.jsx, page.jsx, globals.css)
├── components/ (Header, Hero, PrintingModel, Section, Projects, Experience,
│               Skills, Credentials, About, Contact, Footer)
├── data/profile.js
├── public/Abin_Saji_Resume.pdf
├── package.json, next.config.mjs, tailwind.config.js, postcss.config.js, jsconfig.json
└── README.md
```

## Deploy
Push to GitHub and import the repository in Vercel; no configuration is needed.
