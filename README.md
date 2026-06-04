
# AdClip AI 🎬

> Turn any product into a viral ad video — powered by AI.

AdClip AI is a full-stack SaaS application that generates professional short-form ad videos from text prompts. Describe your product, and AdClip AI instantly creates an AI-generated image and converts it into a dynamic video optimized for commercials and Reels.

🔗 *Live Demo:* [ad-clip-ai.vercel.app](https://ad-clip-ai.vercel.app


## Features

- 🤖 *AI Image Generation* — Generate product images from text prompts using  AI
- 🎥 *Video Generation* — Convert AI images into short-form videos
- 🔐 *Authentication* — Secure sign-in/sign-up with Clerk
- 💳 *Credits System* — Users get credits to generate content
- 🖼️ *My Generations* — View and manage all generated content
- 🌐 *Community* — Browse publicly shared generations
- 📥 *Download* — Download generated images and videos

## Tech Stack

### Frontend
- React + TypeScript (Vite)
- Tailwind CSS
- Clerk Auth
- React Router DOM
- Lenis Smooth Scroll
- Lucide React Icons

### Backend
- Node.js + Express + TypeScript
- PostgreSQL (Neon DB)
- Prisma ORM
- Clerk Auth (server-side)
- FFmpeg (video generation)
- Cloudinary (media storage)
- Sentry (error monitoring)

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon DB recommended)

### Installation

1. *Clone the repo*
bash
git clone https://github.com/Mintu-dev/adclip-ai.git
cd adclip-ai


2. *Install dependencies*
bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install


3. *Set up environment variables*

Create .env in /server:
env
DATABASE_URL=your_neon_db_url
CLERK_SECRET_KEY=your_clerk_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
PORT=8000


Create .env in /client:
env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:8000


4. *Set up database*
bash
cd server
npx prisma migrate dev

5. *Run the app*
bash
# Backend (from /server)
npm run dev

# Frontend (from /client)
npm run dev

## Deployment

- *Frontend* — Vercel
- *Backend* — Render
- *Database* — Neon DB
- *Media Storage* — Cloudinary

---

## Author

*Mintu Kumar*
- GitHub: [@Mintu-dev](https://github.com/Mintu-dev)
