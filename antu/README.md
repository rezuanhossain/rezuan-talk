# RezReview Hub (Eleventy)

Affiliate marketing portfolio and blog for Rezuan built with [Eleventy](https://www.11ty.dev/).

## Prerequisites

- Node.js >= 18
- npm or pnpm/yarn

_Check your version: `node --version`_

## Setup

```bash
npm install
```

## Run locally

```bash
PATH="$(pwd)/node-local/bin:$PATH" npm run dev
```

Eleventy will serve the site at `http://localhost:8080/` and rebuild on save. (Adjust the `PATH` if you installed Node somewhere else.)

## Production build

```bash
PATH="$(pwd)/node-local/bin:$PATH" npm run build
```

Outputs static files to `_site/` ready for any static host (Netlify, Vercel, Cloudflare Pages, Surge, etc.).

## Deploy to Surge

```bash
PATH="$(pwd)/node-local/bin:$PATH" npx surge ./_site rezreview-hub.surge.sh
```

The command will prompt for your Surge email/password the first time. Once deployed, the static site is live at the chosen domain.

## Content structure

- `src/index.md` – landing page with hero, services, featured posts
- `src/blog/` – blog index that lists everything under `src/posts/`
- `src/services/`, `src/about/`, `src/contact/` – supporting pages
- `src/posts/` – Markdown blog posts with front matter (`title`, `date`, `category`, `excerpt`, `featured`)
- `src/assets/` – CSS and static media copied straight through to `_site`

## Customization tips

- Edit nav/metadata in `src/_includes/layouts/base.njk`
- Update colors/spacing in `src/assets/css/site.css`
- Duplicate any Markdown file to add new sections or posts

## বাংলা নোট

1. প্রথমে Node.js 18 বা তার নতুন ভার্সন ইনস্টল করুন।
2. `npm install` চালিয়ে ডিপেন্ডেন্সি আনুন।
3. `PATH=\"$(pwd)/node-local/bin:$PATH\" npm run dev` দিলে লোকাল সার্ভার চালু হবে এবং আপনি কনটেন্ট এডিট করলে সাথে সাথে আপডেট দেখতে পাবেন।
4. নতুন ব্লগ যোগ করতে `src/posts/` ফোল্ডারে একটি `.md` ফাইল তৈরি করুন এবং ফ্রন্ট ম্যাটারে `title`, `date`, `category`, `excerpt`, `featured` দিন। প্রতিটি ব্লগে কমপক্ষে ১০০০ শব্দ লিখলে SEO তে সাহায্য করবে।
5. `PATH=\"$(pwd)/node-local/bin:$PATH\" npm run build` চালিয়ে `_site/` ফোল্ডার বানান, এরপর `npx surge` দিয়ে হোস্ট করুন।

শুভকামনা!
