# CarePath Continuum: Website

A static rebuild and redesign of [carepathcontinuum.com](https://carepathcontinuum.com/).

**Stack:** Vite · React · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · lucide-react · React Router

## Scripts

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the dev server                               |
| `npm run build`   | Type-check and build the static site into `dist/`  |
| `npm run preview` | Serve the production build locally                 |
| `npm run lint`    | Lint with oxlint                                   |
| `npm run format`  | Format with Prettier (also sorts Tailwind classes) |

## Structure

```
docs/                 decisions, research and plans (see docs/README.md)
public/               static files served as-is
src/
  main.tsx            entry: mounts the router
  router.tsx          all routes, plus redirects from the old GoDaddy URLs
  config/site.ts      site name, email, nav links
  pages/              one file per route (*-page.tsx)
  components/
    layout/           header, mobile menu, footer, page shell
    ui/               shadcn components (generated; add more with `npx shadcn add <name>`)
  lib/                shared helpers
  index.css           Tailwind and design tokens (the single source of the theme)
```

## Hosting note

The site uses client-side routing. The static host must serve `index.html` for unknown paths (SPA fallback), or deep links will 404.
