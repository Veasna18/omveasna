# Om Veasna — Portfolio (React + Vite)

A terminal/dev-console themed rebuild of the original HTML/CSS portfolio, as a React app.

## Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, or GitHub Pages.

## Structure

```
portfolio-vite/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx      # React entry point
    └── App.jsx       # The whole portfolio (all sections + styles)
```

## Notes

- Styling is plain CSS-in-JS (a `<style>` block in `App.jsx`) — no Tailwind setup needed.
- Icons come from `lucide-react`.
- Images are pulled directly from the original site's `/Images/` folder. Swap in local images under `public/` and update the `src` paths in `App.jsx` if you'd rather host them yourself.
- Update project links, socials, and contact info directly in the data arrays near the top of `App.jsx`.
