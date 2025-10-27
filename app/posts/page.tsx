import { fetchPosts } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
    const posts = await fetchPosts();

    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4"></h1>
            
        </main>
    );
}