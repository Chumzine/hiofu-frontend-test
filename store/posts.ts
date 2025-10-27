import { create } from "zustand";
import { fetchPosts, createPost, updatePost, deletePost, Post } from "@/lib/api";

type PostsState = {
    posts: Post[];
    loading: boolean;
    error?: string;
    page: number;
    search: string;
    fetchAllPosts: () => Promise<void>;
    addPost: (post: Post) => Promise<void>;
    editPost: (id: number, post: Post) => Promise<void>;
    removePost: (id: number) => Promise<void>;
    setPage: (value: number) => void;
    setSearch: (value: string) => void;
};

export const usePostsStore = create<PostsState>((set, get) => ({
    posts: [],
    loading: false,
    error: undefined,
    page: 1,
    search: "",

    fetchAllPosts: async () => {
        set({ loading: true });
        try {
           const data = await fetchPosts();
           set({ posts: data, loading: false });
        } catch {
            set({ error: "Failed to fetch posts", loading: false });
        }
    },

    addPost: async (post) => {
        const previous = get().posts;

        const optimisticId = Date.now();
        const optimisticPost = { ...post, optimisticId };
        set({ posts: [...previous, optimisticPost] });

        try {
            const newPost = await createPost(post);
            set({ posts: get().posts.map(p => (p.id === optimisticId ? newPost : p)) })
        } catch (error) {
            console.error("Failed to add post:", error);
            set({ posts: previous });
        }
    },

    editPost: async (id, post) => {
        const previous = get().posts;
        const updated = previous.map(p => (p.id === id ? { ...p, ...post } : p));
        set({ posts: updated });

        try {
            await updatePost(id, post);
        } catch {
            set({ posts: previous });
        }
    },

    removePost: async (id) => {
        const previous = get().posts;
        set({ posts: previous.filter(p => p.id !== id) });

        try {
            await deletePost(id);
        } catch {
            set({ posts: previous })
        }
    },

    setSearch: (value) => set({ search: value }),
    setPage: (value) => set({ page: value }),
}));