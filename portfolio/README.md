# Akash Mishra — Portfolio

Personal portfolio of **Akash Mishra**, DevOps & Cloud Engineer.

Built on Next.js (App Router) + Tailwind CSS v4 + shadcn/ui. Adapted from the
open-source [chanhdai.com](https://github.com/ncdai/chanhdai.com) template
(MIT) — all original branding/content has been removed and replaced.

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Content

All site content is data-driven and lives in `src/features/portfolio/data/`:

- `user.ts` — name, role, bio, contact, avatar
- `social-links.ts` — social profiles
- `experiences.tsx` — work history
- `projects.ts` — selected projects
- `tech-stack.ts` — technologies
- `certifications.ts`, `awards.tsx`, `bookmarks.tsx` — currently empty

Blog posts are MDX files in `src/features/doc/content/`.

## Notes

- ESLint is temporarily disabled during build (`next.config.ts`) while the
  bundled shadcn component registry under `src/registry/` is being cleaned up.
- See `NEEDS.md` for the list of assets and content still required.
