import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";  // Update this based on your backend

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
