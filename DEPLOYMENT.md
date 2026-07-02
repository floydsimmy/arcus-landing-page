# Deployment (cPanel static hosting)

The site is served from shared cPanel hosting at **arcus.co.mz** that cannot
run Node.js. The app is therefore built as a **fully static export** in GitHub
Actions, and cPanel only copies pre-built files into `public_html`. The server
never builds anything and never runs a Node process.

## How the pipeline works

```
push to main
   │
   ▼
GitHub Actions (.github/workflows/deploy.yml)
   • npm ci --legacy-peer-deps
   • npm run build:static        → static site in out/
   • cp deploy/cpanel.yml out/.cpanel.yml
   • commit out/ to the `cpanel-deploy` branch
   │
   ▼
cPanel ▸ Git Version Control (manual step)
   • "Update from Remote" pulls the cpanel-deploy branch
   • "Deploy HEAD Commit" runs .cpanel.yml, which copies the files
     (and .htaccess) into /home2/arcusco/public_html/
```

Branches:

- **`main`** — source code only. `out/` is gitignored and never committed here.
  The old root `.cpanel.yml` was removed from `main` so cPanel can no longer
  deploy raw source by accident.
- **`cpanel-deploy`** — build artifacts only (contents of `out/` plus
  `.cpanel.yml`). Written by CI; never edit it by hand. Commits are appended
  (no force-push) because cPanel can only fast-forward when it pulls.

## One-time manual step: point cPanel at `cpanel-deploy`

This cannot be done from the repo — do it once in cPanel:

1. Wait for the first **"Build static site for cPanel"** workflow run to go
   green (Actions tab on GitHub) so the `cpanel-deploy` branch exists.
2. In cPanel go to **Git™ Version Control** and click **Manage** on the
   `arcus-landing-page` repository.
3. On the **Basic Information** tab, change **Checked-Out Branch** to
   `cpanel-deploy` and save.
4. Open the **Pull or Deploy** tab, click **Update from Remote**, then
   **Deploy HEAD Commit**.

## Releasing a change (every time)

1. Merge/push to `main`.
2. Wait for the GitHub Action to finish (~2 min).
3. In cPanel ▸ Git Version Control ▸ Manage ▸ Pull or Deploy:
   **Update from Remote** → **Deploy HEAD Commit**.

cPanel does not pull automatically; step 3 is always manual (shared hosts
generally don't accept webhooks for this).

## Verifying the live site

- `https://arcus.co.mz/` → should 302-redirect to `/pt/` (via `.htaccess`).
- `https://arcus.co.mz/pt/` and `/en/` → localized home pages.
- `/pt/about/`, `/pt/projects/`, `/pt/projects/1/` … `/pt/projects/6/`
  (same under `/en/`) → all static pages.
- A nonsense URL (e.g. `/xyz`) → styled 404 page (`404.html`).
- Check that CSS/JS load from `/_next/static/…` (no 404s in devtools).

## Local build & preview

```bash
npm install --legacy-peer-deps
npm run build:static          # produces out/
cd out && python3 -m http.server 8000
# browse http://localhost:8000/pt/
```

## What changed to make static export work

- **`next.config.mjs`** — when `STATIC_EXPORT=1` is set, adds
  `output: 'export'`, `trailingSlash: true` (so Apache serves
  `/en/` → `/en/index.html` without rewrites) and
  `images.unoptimized: true` (no image server on static hosting).
  Plain `next dev` / `next build` / `next start` behave as before.
- **`package.json`** — new `build:static` script.
- **`src/middleware.ts`** — **removed**. Middleware cannot run on a static
  host and `next build` refuses to combine middleware with `output: 'export'`.
  See behavior changes below.
- **`src/app/[locale]/layout.tsx`** — added `generateStaticParams()` (builds
  `/pt` + `/en`) and `unstable_setRequestLocale()` so next-intl renders
  statically; also validates the locale.
- **`src/app/[locale]/projects/page.tsx`** — receives `params.locale` and
  calls `unstable_setRequestLocale()` (it uses `getTranslations`).
- **`src/app/[locale]/projects/[id]/page.tsx`** — added
  `generateStaticParams()` (project IDs collected from both
  `messages/*.json` files) and `unstable_setRequestLocale()`.
- **`src/app/layout.tsx`** — now a pass-through. Previously it rendered a
  second `<html>` around the one from `[locale]/layout.tsx` (invalid nested
  markup). `<html lang>`/`<body>` come from the locale layout.
- **`public/.htaccess`** — new; deployed to `public_html`. Redirects `/` to
  `/pt/` server-side and points 404s at the exported `404.html`.
- **`deploy/cpanel.yml`** — the `.cpanel.yml` that ships on the
  `cpanel-deploy` branch. Clears stale `_next/` assets, copies everything
  into `public_html`, and copies `.htaccess` explicitly (shell `*` skips
  dotfiles).
- **Pre-existing build breaks fixed** (main did not compile before):
  a type error in `src/app/_components/lang-selector.tsx`, and
  `vitest.config.ts` referencing an uninstalled package (excluded in
  `tsconfig.json`). Also fixed `./quote.svg` → `/quote.svg` in
  `testimonial-card.tsx`, which would have broken on locale-prefixed pages.

## next-intl behavior changes (read this)

- **No more Accept-Language detection.** The middleware used to pick a locale
  for `/` based on browser headers/cookies. Now `/` always goes to **`/pt`**
  (the default locale) via `.htaccess` (with a JS fallback baked into the
  exported root `index.html`). Visitors can still switch to English with the
  language selector — that is client-side navigation and works unchanged.
- **Locale URLs are unchanged**: everything lives under `/pt/...` and
  `/en/...` (`localePrefix: 'always'`), same as before.
- **Trailing slashes**: canonical URLs now end in `/` (e.g. `/pt/about/`).
  Apache automatically redirects `/pt/about` → `/pt/about/`.
- **Unprefixed paths** (e.g. `/about`) 404, but they also did before — the
  old middleware matcher only covered `/` and `/(pt|en)/…`.
- In `next dev`, `/` is redirected by `src/app/page.tsx` (not middleware);
  locale behavior in dev matches production.

## Limits / notes

- `.cpanel.yml` cleans `_next/` on each deploy but does **not** delete
  removed *pages* from `public_html` (a full wipe is risky — `public_html`
  may hold `.well-known/`, `cgi-bin/`, etc.). If a page is ever deleted from
  the site, remove its folder in cPanel's File Manager once.
- The `cpanel-deploy` branch accumulates one commit per release. If it ever
  gets heavy, delete the branch on GitHub, re-run the workflow, and re-create
  the repo in cPanel (checked out on `cpanel-deploy` again).
- The contact form is presentational only (it always was — it just
  `console.log`s). A static host cannot receive form POSTs; wire it to a
  service like Formspree if it should actually send email.
