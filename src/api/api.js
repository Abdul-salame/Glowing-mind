
import axios from "axios";


const SITE_DOMAIN = "https://coreblog.coinswipe.xyz";
const API_URL = `${SITE_DOMAIN}/api/v1`;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, 
});


api.interceptors.response.use(
  (response) => response.data,
  (error) => {
   
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);


export const getImageUrl = (path) => {
  if (!path) return "https://via.placeholder.com/800x400?text=GMI+Blog";
  if (path.startsWith("http")) return path;
  
 
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_DOMAIN}${cleanPath}`;
};

export default api;