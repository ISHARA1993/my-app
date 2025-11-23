import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/post";

export default function Page() {
    return (
        <>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <Post key={post.id} {...post} />
                ))}
            </ul>
        </>
    );
}