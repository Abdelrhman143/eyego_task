---

# Eyego Intern- Q3 2025 - Task Delivery

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd eyego_task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env.local` (if provided) or create `.env.local`.
   - Add your Supabase and NextAuth credentials:
     ```
     NEXT_PUBLIC_SUPABASE_KEY=your_supabase_key
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your_nextauth_secret
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Deployment

The project is ready to deploy on [Vercel](https://vercel.com/):

- Push your code to GitHub.
- Import the repository into Vercel.
- Set the required environment variables in the Vercel dashboard.
- Deploy!

**Live Demo:**  
[Deployment Link Here](#) <!-- Replace with your actual deployment URL -->

---

## Implementation Approach

This project is a full-stack dashboard application built with **Next.js** (App Router), **React**, and **Redux Toolkit** for state management. It uses **Supabase** as the backend for authentication and product data storage, and **NextAuth.js** for secure authentication.

**Key Features:**

- **Authentication:**  
  Uses NextAuth.js with Supabase as the credentials provider. Middleware ensures protected routes are only accessible to authenticated users.

- **Product Management:**  
  Products are fetched, added, edited, and deleted using Supabase as the backend. Redux Toolkit manages product state, pagination, filtering, and sorting.

- **Statistics:**  
  The dashboard includes a stats page with charts (using Recharts) to visualize product categories and revenue.

- **Deployment:**  
  The app is optimized for deployment on Vercel, with environment variables for secure configuration.

---
