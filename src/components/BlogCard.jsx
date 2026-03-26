import { Link } from "react-router-dom";
import { getImageUrl } from "../api/api";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
      {/* Image with Category Badge */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={getImageUrl(post.media)} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-black">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
          {post.excerpt || "Join Glowing Minds Initiatives as we explore impact and community growth..."}
        </p>

        {/* The "Read More" Arrow */}
        <Link 
          to={`/blog/${post.slug || post.id}`} 
          className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/btn"
        >
          Read More 
          <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
}