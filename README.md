<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


# HIOFU Frontend Take‑Home Test


![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Zustand](https://img.shields.io/badge/Zustand-Global%20State-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38B2AC?logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn-UI-111827)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?logo=axios&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?logo=vercel)](https://your-vercel-app-url.vercel.app)



A simple CRUD application built with **Next.js (App Router)**, **TypeScript**, **Zustand**, **TailwindCSS**, and **Shadcn UI**.  
It consumes the [JSONPlaceholder Posts API](https://jsonplaceholder.typicode.com/posts) and demonstrates SSR, client‑side search, pagination, and optimistic updates.

---

## 🚀 Features

- **Server‑Side Rendering (SSR)**
  - `/posts` → list of posts (title + body preview)
  - `/posts/[id]` → single post details
- **Client‑Side**
  - Search posts by title/body
  - Pagination
  - Create, Update, Delete posts with optimistic UI + rollback on failure
- **State Management**
  - Global state with Zustand (posts, loading, error, search, pagination)
- **UI/UX**
  - Responsive layout with TailwindCSS
  - Accessible forms (create/edit)
  - Clear loading, empty, and error states

---

## 🛠️ Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Axios](https://axios-http.com/) for API calls

---

## 📦 Installation & Running

Clone the repo and install dependencies:

```bash
git clone https://github.com/Chumzine/<your-repo>.git

cd <your-repo>

pnpm install   # or npm install / yarn install


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 🌐 Deployment
Deployed easily with Vercel.

👉 Bonus: include your live link here once deployed.

## 🔍 SSR vs CSR Usage
• 	SSR (Server‑Side Rendering):
• 	 and  fetch data on the server for SEO and fast first paint.
• 	CSR (Client‑Side Rendering):
• 	Search, pagination, and CRUD actions happen in the browser using Zustand state.


## 🧩 State Management Flow
1. 	Initial load: SSR fetches posts → passed into Zustand store.
2. 	Search:  string updates →  derives results.
3. 	Pagination:  state +  slices results.
4. 	Create/Update/Delete:
• 	Optimistic update applied immediately.
• 	API call made.
• 	On success → optimistic item replaced with server response.
• 	On failure → rollback to previous state.


## ⚖️ Trade‑offs & Improvements
• 	JSONPlaceholder doesn’t persist changes → CRUD is demo‑only.
• 	Pagination is client‑side only (API doesn’t support server‑side pagination).
• 	Could add toast notifications for success/error feedback.
• 	With more time:
• 	Improve accessibility (keyboard navigation, ARIA roles).


# 📂 Project Structure
app/
  layout.tsx
  page.tsx
  posts/
    page.tsx
    [id]/page.tsx
    components/
      create-post-form.tsx
      edit-dialog.tsx
      post-card.tsx
      posts-list.tsx
components/ui/   # Shadcn UI components
lib/
  api.ts
  pagination.ts
  utils.ts
store/
  posts.ts



## 👩‍💻 Author

Built by [Adaobi Chuma-Okeke](https://www.linkedin.com/in/adaobi-chuma-okeke-3677a9140/) for the HIOFU Frontend Take‑Home Test.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/adaobi-chuma-okeke-3677a9140/)




