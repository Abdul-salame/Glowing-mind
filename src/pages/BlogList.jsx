
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../api/blogApi";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40 bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      
      className="bg-gray-50 py-20 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 border-l-4 border-blue-600 pl-6">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Insights & Stories
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Research, impact stories, and thought leadership from Glowing Minds
            Initiatives.
          </p>
        </header>

        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-dashed">
            <p className="text-gray-500 italic">No blog posts found in the archives.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
             
              <BlogCard key={blog.id || blog._id} post={blog} />
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default BlogList;