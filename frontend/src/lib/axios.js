import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-mates-backend.onrender.com" : "/api",
  withCredentials: true,
});
