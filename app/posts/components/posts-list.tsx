"use client";

import { useEffect } from "react";
import { usePostsStore } from "@/store/posts";
import { paginate, filterPosts } from "@/lib/pagination";
import CreatePostForm from "./create-post-form";
import PostCard from "./post-card";


export default function PostsList() {
  const { posts, fetchAllPosts, search, page, setPage, setSearch, loading, error } = usePostsStore();

  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  const filtered = filterPosts(posts, search);
  const pageSize = 10;
  const paged = paginate(filtered, page, pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <CreatePostForm />

      {paged.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paged.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="flex gap-2">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}