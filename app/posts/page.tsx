import PostsList from "./components/posts-list";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4"></h1>
            <PostsList />
        </main>
    );
}