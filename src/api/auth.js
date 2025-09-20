// src/api/auth.js
import api from "../lib/api";

export async function login({ userName, password }) {
  return api.post("/auth/login", { userName, password });
}

export async function register({ userName, email, password }) {
  return api.post("/auth/register", { userName, email, password });
}
