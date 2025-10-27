import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Fetch all posts
export const fetchPosts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Fetch a post by id
export const fetchPostById = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Create a post
export const createPost = async (post: Post) => {
    const response = await axios.post(API_URL, post);
    return response.data;
};

// Update a post
export const updatePost = async (id: number, post: Post) => {
    const response = await axios.put(`${API_URL}/${id}`, post);
    return response.data;
};

// Delete a post
export const deletePost = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
}



export type Post = {
    id: number,
    userId?: number,
    title: string,
    body: string
};