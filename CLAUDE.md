# degneren.github.io — CLAUDE.md

## Project Overview
Test lab website at **www.degn.io** (GitHub Pages + Jekyll). Used for testing consent management, GTM, and third-party integrations. All pages are static HTML + vanilla JavaScript — no build step, no npm.

## Key IDs & Integrations
- **Cookiebot ID**: `fbc570b6-3abc-4ceb-91c8-0671eb229b75`
- **GTM container**: `GTM-K2Q83T7`
- **GA4**: `G-6DQ7ZLQRWE`
- **Intercom App ID**: `j3ouceg3`
- **Domain**: `www.degn.io`

## File Structure
- `index.html` — landing page
- `GTMpage.html`, `GTMpage2.html` — GTM ecommerce tracking tests
- `multipagesetup/multipage1-30.html` — cross-page consent tracking tests
- `Scripts/` — shared JS utilities (SetCookie, blocked scripts)
- `intercom-jwt-test.html` — Intercom identity/JWT testing
- `cb4shopify.html` — Intercom/Zendesk session clearing
- `catgame.html` — canvas game (unrelated to consent)
- `_config.yml` — Jekyll config (theme: jekyll-theme-slate)
- `CNAME` — points to www.degn.io

## Code Conventions
- **HTML**: HTML5, Cookiebot auto-blocker in `<head>`, `data-cookieconsent` attributes on scripts/images
- **JS**: vanilla, camelCase functions (e.g. `SetCookie`), GTM `dataLayer.push({})`
- **CSS**: kebab-case classes, single `css/main.css`
- No framework, no transpilation — edit and push directly

## Deployment
Push to `main` branch → GitHub Pages auto-deploys. No CI/CD pipeline.

## Common Tasks
- **Add a test page**: create a new `.html` file, copy Cookiebot head snippet from `index.html`
- **Test Intercom**: use `intercom-jwt-test.html` as starting point
- **Test GTM**: use `GTMpage.html` or `GTMpage2.html`
- **Multipage consent tests**: add to `multipagesetup/` following the existing numbering
