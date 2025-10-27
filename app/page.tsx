import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to the HIOFU CRUD App</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          A simple demo built with Next.js, Zustand, and Shadcn UI.  
          Manage posts with search, pagination, and CRUD actions.
        </p>
        <Link
          href="/posts"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View Posts
        </Link>
      </div>
    </main>
  );
}