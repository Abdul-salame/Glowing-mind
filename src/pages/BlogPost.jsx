
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api, { getImageUrl } from "../api/api";

export default function BlogPost() {
  const { slug } = useParams(); // This matches the :slug in your App.jsx routes
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Try fetching by slug first
        const data = await api.get(`/blog/${slug}`);
        setPost(data);
      } catch (err) {
        console.error("Fetch Error:", err.response?.data || err.message);
        setError("Could not find this post.");
      }
    };
    fetchPost();
  }, [slug]);

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black">
      <p className="text-xl font-bold mb-4">{error}</p>
      <Link replace to="/blog" className="text-blue-600 underline">Back to All Blogs</Link>
    </div>
  );

  if (!post) return <div className="min-h-screen flex items-center justify-center text-black">Loading...</div>;

  return (
    <div className="bg-white min-h-screen pb-20 text-black">
       {/* ... same UI code as before ... */}
       <img src={getImageUrl(post.media)} alt={post.title} className="w-full rounded-2xl" />
       <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}