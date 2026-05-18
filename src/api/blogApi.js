
  // public/src/api/blogApi.js
import api from "./api";

// Get all blogs
export const getBlogs = async () => {
  const res = await api.get("/blog");
  return res;
};

// Get single blog by slug
export const getSingleBlog = async (slug) => {
  const res = await api.get(`/blog/${slug}`);
  return res;
};