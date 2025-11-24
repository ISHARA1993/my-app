import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/post";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;

    const post = posts.find((post) => post.id === id);

    if (!post) {
        return <h1>Post not found</h1>;
    }
    return (
        <>
            <h1>Post</h1>
            <Post {...post} />
        </>
    );
}