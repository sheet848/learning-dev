import PostCard from "./components/PostCard";

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch posts (status: ${res.status})`);
    }

    return res.json();

}

export default async function Home() {

    const posts = await getPosts();

    return (
        <>
            <div className="min-h-screen bg-gray-50 p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Latest Posts</h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.slice(0, 9).map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </>
    );
}