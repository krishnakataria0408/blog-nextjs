import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Posts';

export default function Page({ params }: { params: { id: string } }) {
    const post = posts.find((post) => post.id === params.id);
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
      <>
        <h1>Post</h1>
        <Post {...post as { id: string; title: string; content: string; date: string }} />
      </>)
  }