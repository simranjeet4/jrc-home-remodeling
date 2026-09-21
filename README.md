# JRC Home Remodeling — Website Reconstruction

Exact reconstruction of the JRC Home Remodeling website ([jrchomeremodeling.com](https://jrchomeremodeling.com)) in React + Node.js.

## Tech Stack

### Frontend
- React 19 + Vite
- React Router (client-side routing preserving original URLs)
- Framer Motion (only where original animations warrant it)
- Swiper (hero slider)
- Axios (API calls)
- React Helmet Async (SEO meta tags)

### Backend
- Node.js + Express
- PostgreSQL (lead storage)
- Nodemailer (contact form email notifications)
- Zod (server-side validation)
- Helmet + CORS + Rate Limiting (security)

## Project Structure

```
jrc-home-remodeling/
├── client/          # React frontend (Vite)
│   ├── public/      # Static assets (images, icons, fonts)
│   └── src/         # Source code
│       ├── components/  # Reusable UI components
│       ├── pages/       # Route-level page components
│       ├── content/     # Centralised text/data
│       ├── hooks/       # Custom React hooks
│       ├── services/    # API service layer
│       ├── styles/      # Global CSS
│       └── utils/       # Helper functions
│
├── server/          # Express backend
│   ├── config/      # DB connection + schema
│   ├── controllers/ # Route handlers
│   ├── middleware/   # Validation, error handling
│   ├── models/      # PostgreSQL queries
│   ├── routes/      # API route definitions
│   ├── services/    # Email service
│   └── utils/       # Zod schemas
│
└── docs/            # Phase 1 audit documents
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+

### Frontend
```bash
cd client
npm install
npm run dev          # http://localhost:5173
```

### Backend
```bash
cd server
cp .env.example .env   # Fill in real values
npm install
npm run dev             # http://localhost:5000
```

### Database Setup
```bash
psql -U postgres -c "CREATE DATABASE jrc_remodeling;"
psql -d jrc_remodeling -f server/config/schema.sql
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact/estimate form |
| GET | `/api/health` | Server health check |

## Routes (Preserving Original URLs)

| Path | Page |
|------|------|
| `/` | Homepage |
| `/home-remodeling` | Home Remodeling |
| `/about-us` | About Us |
| `/services` | Services Hub |
| `/contact-us` | Contact Us |
| `/blog` | Blog |
| `/jrc-tile` | JRC Tile |
| `/jrc-decks` | JRC Decks |
| `/jrc-painting` | JRC Painting |
| `/jrc-frame-and-drywall` | JRC Frame & Drywall |
| `/bathtub-shower-conversions` | Bathtub Shower Conversions |
| `/junk-removal-demolition` | Junk Removal & Demolition |
| `/landscape-design-near-me` | Landscape Design |
| `/floor-installers` | Floor Installers |
| `/roof-repair` | Roof Repair |
| `/handyman-near-me` | Handyman |
| `/kitchen-remodeling` | Kitchen Remodeling |
| `/bathroom-remodeling` | Bathroom Remodeling |
| `/basement-remodeling` | Basement Remodeling |
| `/countertop-services-near-me` | JRC Countertops |
| `/privacy-policy` | Privacy Policy |
| `/terms-conditions` | Terms & Conditions |
