"use client";

import { useState } from "react";
import { Post } from "@/lib/api";
import { usePostsStore } from "@/store/posts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function EditPostDialog({ post }: { post: Post }) {
  const { editPost } = usePostsStore();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await editPost(post.id, { id: post.id, title, body });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Edit post</DialogHeader>
        <form onSubmit={onSubmit} className="flex flex-col gap-2" aria-label={`Edit ${post.title}`}>
          <div className="space-y-1">
            <Label htmlFor="edit-title">Title</Label>
            <Input id="edit-title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="edit-body">Body</Label>
            <Textarea id="edit-body" value={body} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)} required />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}