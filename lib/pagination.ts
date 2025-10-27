import { Post } from "@/lib/api";

export function paginate(posts: Post[], page: number, pageSize: number) {
  const start = (page - 1) * pageSize;
  return posts.slice(start, start + pageSize);
}

export function filterPosts(posts: Post[], query: string) {
  if (!query) return posts;
  const q = query.toLowerCase();
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.body.toLowerCase().includes(q)
  );
}