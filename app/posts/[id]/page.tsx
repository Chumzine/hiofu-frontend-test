import { fetchPostById } from "@/lib/api";

type PostDetailsProps = { params: { id: string } };
export default async function PostDetailsPage({ params }: PostDetailsProps) {
    const post = await fetchPostById(Number(params.id));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-semibold">{post.title}</h1>
            <p className="mt-2 text-gray-700">{post.body}</p>
        </div>
    )
}