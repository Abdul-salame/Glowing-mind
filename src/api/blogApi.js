
// public/src/api/blogApi.js
import api from "./api";

// Get all blogs
export const getBlogs = async () => {
  const res = await api.get("/blog");
  return res.data;
};

// Get single blog
export const getSingleBlog = async (id) => {
  const res = await api.get(`/blog/${id}`);
  return res.data;
};