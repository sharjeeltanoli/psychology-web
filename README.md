# Ms. Ayman Yamin — Clinical Psychologist Website

A professional personal website for **Ms. Ayman Yamin**, Clinical Psychologist, built with Next.js 15, TypeScript, and Tailwind CSS.

🌐 **Live:** [aymanyamin.com](https://aymanyamin.com)

---

## Features

- **Homepage** — Hero section, Services, About intro, Why Choose Me, Testimonials
- **About Page** — Full professional profile, experience, education, skills
- **Services** — 6 service pages with dynamic routing (`/services/[slug]`)
- **Blog** — 7 articles with search, category filter, and dynamic pages (`/blog/[slug]`)
- **FAQ Page** — Accordion with category filter
- **Contact Page** — Form with Resend email integration
- **Booking Page** — Calendly embedded for online session scheduling
- **SEO** — Sitemap, robots.txt, schema markup, Open Graph, Google Search Console
- **Responsive** — Mobile-first design with Shadcn UI components

---

## Tech Stack

| Technology | Usage |
|---|---|
| Next.js 15 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Shadcn UI | UI Components |
| Resend | Contact form emails |
| Calendly | Session booking |
| Vercel | Deployment |

---

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── about/
│   ├── blog/[slug]/
│   ├── booking/
│   ├── contact/
│   ├── faq/
│   ├── services/[slug]/
│   ├── api/contact/        # Resend email API
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Page sections
├── data/                   # Content data files
│   ├── services.ts
│   ├── blogs.ts
│   ├── testimonials.ts
│   ├── faqs.ts
│   └── about.ts
├── hooks/                  # Custom hooks
│   ├── useCountUp.ts
│   └── usePageAnimation.ts
└── lib/
    ├── constants.ts
    └── utils.ts
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/ayman-yamin.git

# Install dependencies
npm install

# Add environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

```env
RESEND_API_KEY=your_resend_api_key
```

---

## Content Management

All content is managed through data files in `src/data/`:

- **Services** — Edit `services.ts` to update service details, prices, and descriptions
- **Blog posts** — Edit `blogs.ts` to add or update articles
- **Testimonials** — Edit `testimonials.ts` to update client reviews
- **FAQs** — Edit `faqs.ts` to add or update questions
- **About** — Edit `about.ts` to update professional information

---

## Deployment

The project is deployed on **Vercel** with automatic deployments on every `git push`.

```bash
git add .
git commit -m "Your changes"
git push
```

Vercel automatically deploys to [aymanyamin.com](https://aymanyamin.com).

---

## SEO

- Google Search Console verified ✅
- Sitemap submitted ✅
- Schema markup (Person + LocalBusiness) ✅
- Open Graph & Twitter cards ✅
- Google Business Profile ✅

---

## Developer

Built by **Muhammad Sharjeel**

---

*© 2025 Ms. Ayman Yamin. All rights reserved.*
