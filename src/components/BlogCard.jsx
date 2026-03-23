
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="bg-blue-100 border rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all"
    >
      {/* Image */}
      {blog.image_url && (
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Category */}
          <p className="text-xs text-blue-600 flex items-center gap-1">
            <FaTag /> {blog.category || "General"}
          </p>

          {/* Title */}
          <h3 className="text-lg font-bold mt-2 mb-3">
            {blog.title}
          </h3>

          {/* Meta */}
          <div className="text-xs text-gray-500 flex gap-4 mb-3">
            <span><FaUser /> {blog.author || "Admin"}</span>
            <span>
              <FaCalendarAlt />
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString()
                : "N/A"}
            </span>
            <span><FaClock /> 5 min</span>
          </div>

          {/* Excerpt */}
          <p className="text-sm text-gray-700 line-clamp-3">
            {blog.excerpt || "No description"}
          </p>
        </div>

        {/* Link */}
        <Link
          to={`/blog/${blog.id}`}
          className="mt-4 text-blue-600 font-semibold"
        >
          Read more →
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;