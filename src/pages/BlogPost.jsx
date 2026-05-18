
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api, { getImageUrl } from "../api/api";

export default function BlogPost() {
  const { slug, id } = useParams(); 
  const postId = slug || id;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await api.get(`/blog/${postId}`);
        setPost(data);
      } catch (err) {
        console.error("Fetch Error:", err.response?.data || err.message);
        setError("Could not find this post.");
      }
    };
    if (postId) fetchPost();
  }, [postId]);

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black">
      <p className="text-xl font-bold mb-4">{error}</p>
      <Link replace to="/blog" className="text-blue-600 underline">Back to All Blogs</Link>
    </div>
  );

  if (!post) return <div className="min-h-screen flex items-center justify-center text-black">Loading...</div>;

  return (
    <div className="bg-white min-h-screen pb-20 text-black">
       
       <img src={getImageUrl(post.img_url || post.media)} alt={post.title} className="w-full rounded-2xl" />
       <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}