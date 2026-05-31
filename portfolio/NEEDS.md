# What I still need from you (Akash)

First iteration is done: the chanhdai.com template is in, all chanhdai branding/
content is removed, the **Components[29]** showcase + Blocks + Sponsors +
Testimonials sections are removed, the **Blog is kept**, and the site is populated
with your real DevOps content and **builds cleanly** (`pnpm build` → 21 routes).

Below is everything that is a placeholder or that I had to guess. Give me these
and I'll wire them in.

## 1. Images / files (drop into `portfolio/public/`)
| What | Path it should live at | Notes |
|------|------------------------|-------|
| Profile photo | `public/akash/avatar.jpg` | Square, ≥400×400. Currently a 404 placeholder. **Highest priority.** |
| Avatar light/dark variants (optional) | `public/akash/avatar-*.jpg` | Only if you want the fancy "lights" toggle on the cover. Right now all 4 variants point at `avatar.jpg`. |
| OG / social share image | `public/akash/og-image.png` | 1200×630. (There's also an auto-generated `/og` route as a fallback.) |
| Favicons | `public/favicon.ico`, `public/favicon.svg`, `public/apple-touch-icon.png` | |
| PWA icons | `public/akash/icon-192x192.png`, `icon-512x512.png`, `maskable-icon.png` | |
| Logo / brand mark (optional) | — | Replaces the temporary **"AM"** monogram + "Akash Mishra" wordmark in the header/footer. |
| Company / project logos (optional) | — | Currently using clean Lucide icons instead. |

## 2. Content to confirm or provide
- **Phone number** — omitted for now (needed for the contact panel + vCard download).
- **Domain** — I used `https://akashmishra.dev` as a placeholder. What's the real one?
- **X/Twitter handle** — placeholder `@akashmishra`; give the real one or I'll drop X.
- **Project dates** (`projects.ts`) — currently **approximate** and marked TODO. Confirm real start/end months.
- **Project links** (`projects.ts`) — most are `#`. Provide repo / demo / case-study URLs where they exist.
- **Experience details** (`experiences.tsx`) — confirm dates, titles, employment types for AiVANTA / Enpointe / Olcademy / Mumbai Univ.
- **Bio / tagline** — confirm "DevOps & Cloud Engineer. I build products and I fix systems."
- **Tech stack** (`tech-stack.ts`) — I picked a DevOps-oriented set (AWS/GCP/OCI, K8s, Terraform, Ansible, CI/CD, Prometheus/Grafana, etc.). Add/remove.
- **Certifications** (`certifications.ts`) — empty. e.g. AWS SA, CKA/CKAD, Terraform Associate…
- **Awards** (`awards.tsx`) — empty.
- **Bookmarks / reading list** (`bookmarks.tsx`) — empty.
- **Testimonials** (`testimonials.ts`) — empty.
- **Blog posts** — one placeholder post (`hello-world.mdx`). Send real posts (MDX) or topics.

## 3. Keys / env (all optional — the site works without them)
Put these in `portfolio/.env.local`:
- `GITHUB_CONTRIBUTIONS_API_URL=https://github-contributions-api.jogruber.de` — turns on your GitHub contribution graph + activity cover (uses `Akash9773312`).
- `NEXT_PUBLIC_APP_URL=https://<your-domain>` — canonical URL for metadata/OG.
- `GITHUB_API_TOKEN=…` — optional, for the "GitHub stars" nav badge.
- `NEXT_PUBLIC_DMCA_URL=…` — optional footer DMCA badge.
- PostHog / OpenPanel analytics — optional; the analytics "Insights" panel was removed from the homepage, so not required.

## 4. Decision I need from you: hosting
The original repo deploys via **GitHub Pages with static export** (`.github/workflows/deploy.yml`, npm, `portfolio/out`). This template is a **dynamic Next.js app** (pnpm; server routes for OG image, vCard, RSS) and is **not** static-export. Pick one and I'll wire up CI:
- **Vercel** (recommended for this template), or
- **GitHub Pages / static export** — I'd strip the dynamic routes to make it export-able.

## 5. Known follow-up (not blocking, noted for transparency)
- The bundled shadcn component **registry** under `src/registry/` still contains chanhdai demo components/strings. It is **no longer rendered on any page**, but for a 100% purge it should be trimmed (or deleted if you don't want a component registry at all). I left it in place so nothing breaks; say the word and I'll remove it.
- ESLint is not run during `next build` (Next.js 16 default). Once the registry is trimmed we can re-enable a lint step.
- Tech-stack & social icons load from `cdn.simpleicons.org` at runtime (neutral, not chanhdai). Can be self-hosted later if you prefer zero external deps.
