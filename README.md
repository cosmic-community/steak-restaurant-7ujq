# Ember & Oak Steakhouse
![App Preview](https://imgix.cosmicjs.com/22e08a50-96d4-11f1-b4d5-af0d12faac5e-autopilot-photo-1544025162-d76694265947-1786597328452.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A polished, upscale steakhouse website powered by [Cosmic](https://www.cosmicjs.com). Warm charcoal-and-ember design, dry-fire menu presentation, multi-location reservations, and real guest reviews — all driven by your existing content model.

## Features

- 🏠 Striking homepage hero, restaurant story, chef's feature dishes, and top reviews
- 🥩 Full menu grouped by category (ordered by `display_order`) with images, prices, and dietary badges
- 📍 Locations page with address, phone, email, hours, and conditional reservation CTAs
- ⭐ Full reviews page with star ratings, reviewer names, visit dates, and locations
- 📱 Fully responsive, fast, and SEO-friendly
- 🎨 Elegant serif/sans typography with a premium dark steakhouse theme

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6a7d4f6fb6bec76689176fc1&clone_repository=6a7d51c9b6bec7668917700b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a restaurant website with menu items (including images, pricing, and dietary info), menu categories, locations, and customer reviews.
>
> User instructions: A steak restaurant site with menu items grouped by category, hours, locations, and reservation info
>
> OUTPUT BUDGET (critical - the response is discarded if it is cut off):
> - Your entire response MUST fit in the output limit. A demoObjects block that gets truncated mid-JSON is unusable and the user ends up with zero content.
> - Create 2-3 demo objects per object type, no more.
> - Keep every text value short: one or two sentences for descriptions and summaries, 60 words maximum for any rich-text or markdown value. Do NOT write multi-paragraph articles, full case studies, or long bios in seed content.
> - Finish the demoObjects JSON array and close its code fence. If you are running long, cut the number of demo objects rather than leaving the JSON incomplete."

### Code Generation Prompt

> "Build a Next.js application for a company website called "Steak Restaurant". The content is managed in Cosmic CMS with the following object types: menu-categories, menu-items, locations, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A polished website for an upscale steak restaurant. Pages: a homepage with a striking hero image, an intro about the restaurant, chef's feature dishes (Menu Items where chefs_feature is true), and featured customer reviews; a full Menu page grouped by Menu Categories (ordered by display_order) showing each item's image, description, price, and dietary info badges; a Locations page listing each location with address, phone, email, image, weekly hours, and a reservation call-to-action linking to reservation_url when accepting_reservations is true (showing reservation_notes); and a Reviews page with star ratings, reviewer names, visit dates, and location. Warm, dark, premium steakhouse aesthetic — deep charcoal and ember tones, elegant serif headings, generous imagery, fully responsive, fast, and SEO-friendly."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) headless CMS via [`@cosmicjs/sdk`](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed
- A Cosmic account and bucket with `menu-categories`, `menu-items`, `locations`, and `reviews` object types

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up your environment variables (see below)
4. Run the development server:
   ```bash
   bun run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file with:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
// Fetch menu categories ordered by display_order
const categories = await cosmic.objects
  .find({ type: 'menu-categories' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch chef's feature dishes
const featured = await cosmic.objects
  .find({ type: 'menu-items', 'metadata.chefs_feature': true })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app reads from four Cosmic object types:

- **Menu Categories** — `description`, `display_order`, `image`
- **Menu Items** — `description`, `price`, `image`, `category` (relation), `dietary_info`, `chefs_feature`
- **Locations** — `address`, `phone`, `email`, `image`, `hours`, `accepting_reservations`, `reservation_url`, `reservation_notes`
- **Customer Reviews** — `reviewer_name`, `rating`, `review`, `visit_date`, `location` (relation)

Connected objects (Menu Item → Category, Review → Location) are resolved using the Cosmic `depth` parameter, so no extra queries are needed. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push this repo to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add the environment variables listed above
4. Deploy

### Netlify

1. Push this repo to GitHub
2. Import the project into [Netlify](https://netlify.com)
3. Set build command to `bun run build` and publish directory to `.next`
4. Add the environment variables listed above
5. Deploy

<!-- README_END -->