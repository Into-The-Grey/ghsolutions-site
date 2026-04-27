# Deployment Checklist

## Production Chain

```text
Local development
→ GitHub (Into-The-Grey/ghsolutions-site)
→ Vercel (auto-deploy on push to main)
→ Cloudflare DNS
→ greyhat-solutions.com
```

## Pre-Deploy Check

Run locally:

```bash
npm run build
```

Then commit and push:

```bash
git status
git add .
git commit -m "Describe change"
git push
```

## Pages to Verify

- `/`
- `/about`
- `/projects`
- `/projects/vega`
- `/projects/star`
- `/projects/kali2go`
- `/projects/d4rk5cou7`
- `/services`
- `/contact`
- `/random-broken-url` — should hit custom 404

## Cloudflare Notes

- Cloudflare remains the DNS control point.
- Vercel handles hosting and deployments.
- SSL is provisioned by Vercel; Cloudflare proxy can be re-enabled after cert propagation.

## Vercel Notes

- GitHub pushes to `main` trigger production deployments.
- Preview deployments are created for non-`main` branches and pull requests.
- Domain is configured under **Project → Settings → Domains**.

## Post-Deploy Checks

- [ ] Site loads on desktop
- [ ] Site loads on mobile
- [ ] Navbar links work
- [ ] Mobile menu opens and closes
- [ ] Project detail pages load correctly
- [ ] 404 page renders for unknown routes
- [ ] Browser title follows `Page | GreyHat Solutions` pattern
- [ ] No broken layout sections
- [ ] `npm audit` returns 0 vulnerabilities
