<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<br/>
![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Zustand](https://img.shields.io/badge/Zustand-Global%20State-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38B2AC?logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn-UI-111827)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?logo=axios&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?logo=vercel)](https://hiofu-frontend-test.vercel.app/)



# HIOFU Frontend Take‑Home Test


A simple CRUD application built with **Next.js (App Router)**, **TypeScript**, **Zustand**, **TailwindCSS**, and **Shadcn UI**.  
It consumes the [JSONPlaceholder Posts API](https://jsonplaceholder.typicode.com/posts) and demonstrates SSR, client‑side search, pagination, and optimistic updates.

    <a href="https://github.com/Chumzine/hiofu-frontend-test"><strong>Explore the docs »</strong></a>
<br/>
<br/>
<br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#features">Features</a>
    </li>
      <li><a href="#tech-stack">Tech Stack</a></li>
      <li><a href="#installation-&-running">Installation & Running</a></li>
    </li>
    <li>
      <a href="#deployment">Deployment</a></li>
    <li>
      <a href="#state-management-flow">State Management Flow</a>
    </li>
    <li><a href="#trade-offs-&-improvements">Trade-offs & Improvements</a></li>
    <li>
      <a href="#project-structure">Project Structure</a>
    </li>
      <li><a href="#author">Author</a></li>
  </ol>
</details>


<!-- FEATURES -->
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- TECH STACK -->
## 🛠️ Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Axios](https://axios-http.com/) for API calls

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- INSTALLATION & RUNNING -->
## 📦 Installation & Running

Clone the repo and install dependencies:

```bash
git clone https://github.com/Chumzine/<your-repo>.git

cd <your-repo>

pnpm install   # or npm install / yarn install


### Getting Started

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- DEPLOYMENT -->
## 🌐 Deployment
Deployed easily with Vercel.

👉 Bonus: include your live link here once deployed.

## 🔍 SSR vs CSR Usage
• 	SSR (Server‑Side Rendering):
• 	 and  fetch data on the server for SEO and fast first paint.
• 	CSR (Client‑Side Rendering):
• 	Search, pagination, and CRUD actions happen in the browser using Zustand state.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- STATE MANAGEMENT FLOW -->
## 🧩 State Management Flow
1. 	Initial load: SSR fetches posts → passed into Zustand store.
2. 	Search:  string updates →  derives results.
3. 	Pagination:  state +  slices results.
4. 	Create/Update/Delete:
• 	Optimistic update applied immediately.
• 	API call made.
• 	On success → optimistic item replaced with server response.
• 	On failure → rollback to previous state.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- TRADE-OFFS & IMPROVEMENTS -->
## ⚖️ Trade‑offs & Improvements
• 	JSONPlaceholder doesn’t persist changes → CRUD is demo‑only.
• 	Pagination is client‑side only (API doesn’t support server‑side pagination).
• 	Could add toast notifications for success/error feedback.
• 	With more time:
• 	Improve accessibility (keyboard navigation, ARIA roles).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- PROJECT STRUCTURE -->
## 📂 Project Structure
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

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- AUTHOR -->
## 👩‍💻 Author

Built by [Adaobi Chuma-Okeke](https://www.linkedin.com/in/adaobi-chuma-okeke-3677a9140/) for the HIOFU Frontend Take‑Home Test.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/adaobi-chuma-okeke-3677a9140/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Chumzine/hiofu-frontend-test.svg?style=for-the-badge
[contributors-url]: https://github.com/Chumzine/hiofu-frontend-test/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Chumzine/hiofu-frontend-test.svg?style=for-the-badge
[forks-url]: https://github.com/Chumzine/hiofu-frontend-test/network/members
[stars-shield]: https://img.shields.io/github/stars/Chumzine/hiofu-frontend-test.svg?style=for-the-badge
[stars-url]: https://github.com/Chumzine/hiofu-frontend-test/stargazers
[issues-shield]: https://img.shields.io/github/issues/Chumzine/hiofu-frontend-test.svg?style=for-the-badge
[issues-url]: https://github.com/Chumzine/hiofu-frontend-test/issues
