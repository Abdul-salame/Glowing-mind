
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
      className="bg-blue-100 border border-gray-200 rounded-2xl overflow-hidden flex flex-col justify-between
                 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      {/* Blog Image */}
      {blog.image_url && (
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-7 flex flex-col justify-between h-full">
        <div>
          {/* Category */}
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-3 flex items-center gap-1">
            <FaTag /> {blog.category || "General"}
          </p>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 leading-snug mb-4">
            {blog.title}
          </h3>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
            <span className="flex items-center gap-1">
              <FaUser /> {blog.author || "GMI Admin"}
            </span>

            <span className="flex items-center gap-1">
              <FaCalendarAlt />
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString()
                : "Date TBD"}
            </span>

            <span className="flex items-center gap-1">
              <FaClock /> 5 min read
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
            {blog.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <Link
          to={`/blog/${blog.id}`}
          className="mt-6 text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
        >
          Read article →
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;