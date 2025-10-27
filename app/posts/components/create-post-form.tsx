"use client";

import { useState } from "react";
import { usePostsStore } from "@/store/posts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePostForm() {
  const { addPost } = usePostsStore();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    await addPost({ title, body, userId: 1, id: 0 });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 border p-3" aria-label="Create post">
      <div className="space-y-1">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="Title" value={title} className="border p-2 rounded" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} required />
      </div>
      <div className="space-y-1">
        <Label htmlFor="body">Body</Label>
        <Textarea id="body" placeholder="Body" value={body} className="border p-2 rounded" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)} required />
      </div>
      <Button type="submit">Create</Button>
    </form>
  );
}