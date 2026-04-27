# ghsolutions-site

Official website project for **GreyHat Solutions**.

Built with:

- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- Cloudflare DNS

## Project Purpose

This site is the central public home for GreyHat Solutions, including:

- Cybersecurity projects
- Automation systems
- AI-assisted tooling
- Homelab and infrastructure work
- Technical documentation
- Project writeups

## Current Pages

```txt
/
/about
/projects
/projects/vega
/projects/star
/projects/kali2go
/projects/d4rk5cou7
/services
/contact
```

## Project Structure

```txt
ghsolutions-site/
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── ButtonLink.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PageShell.tsx
│   ├── SectionHeader.tsx
│   └── StatusBadge.tsx
├── lib/
│   └── projects.ts
├── public/
├── package.json
└── README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open: <http://localhost:3000>

## Build Test

Before deploying, run:

```bash
npm run build
```

This confirms the site can compile for production.

## Deployment Plan

The intended deployment flow is:

```txt
Local development
→ GitHub repository
→ Vercel deployment
→ Cloudflare-managed domain
```

Cloudflare will remain the DNS control point. Vercel will handle hosting and deployment.

## Project Notes

This project intentionally starts simple:

- No database yet
- No authentication yet
- No contact form backend yet
- No admin dashboard yet

Those features may be added later after the public site foundation is stable.

## Status

Active build.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
