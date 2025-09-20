// src/lib/api.js
import axios from "axios";
import { getToken, removeToken } from "./auth";

const base = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5215/api";

const api = axios.create({ baseURL: base });

// attach Authorization header automatically
api.interceptors.request.use(cfg => {
  const t = getToken();
  if (t) cfg.headers = { ...(cfg.headers || {}), Authorization: `Bearer ${t}` };
  return cfg;
});

// global 401 handler: remove token and redirect to login
api.interceptors.response.use(
  r => r,
  err => {
    if (err.response?.status === 401) {
      removeToken();
      // quick redirect to login
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;
