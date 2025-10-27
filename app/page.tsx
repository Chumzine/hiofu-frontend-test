import PostsList from "./posts/components/posts-list";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <PostsList />
    </main>
  );
}