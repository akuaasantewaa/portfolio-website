import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = window.localStorage.getItem("portiUser")
      ? JSON.parse(window.localStorage.getItem("portiUser")).token
      : null;

    // If a token exists, add it to the headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
