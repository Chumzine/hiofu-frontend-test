"use client";

import Link from "next/link";
import { Post } from "@/lib/api";
import { usePostsStore } from "@/store/posts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EditPostDialog from "./edit-dialog";

export default function PostCard({ post }: { post: Post }) {
  const { removePost } = usePostsStore();
  return (
    <Card className="p-4 flex flex-col gap-3">
      <Link href={`/posts/${post.id}`} className="group">
        <h2 className="font-semibold group-hover:underline">{post.title}</h2>
        <p className="text-gray-700 line-clamp-3">{post.body}</p>
      </Link>
      <div className="flex gap-2">
        <EditPostDialog post={post} />
        <Button variant="destructive" onClick={() => removePost(post.id)} aria-label={`Delete ${post.title}`}>
          Delete
        </Button>
      </div>
    </Card>
  );
}