// src/api/auth.js
import api from "../lib/api";
import { setToken } from "../lib/auth";
import { getToken } from "../lib/auth";

export async function login({ userName, password }) {
  const response = await api.post("/auth/login", { userName, password });
  const token = response.data.token;   // ✅ backend sends { token: "..." }
  setToken(token);                     // ✅ save only the string
  return token;
}

// Register and return token
export async function register({ userName, email, password }) {
  const response = await api.post("/auth/register", { userName, email, password });
  const token = response.data.token;   // ✅ backend sends { token: "..." }
  setToken(token);                     // ✅ save only the string
  return token;
}

export async function assignRole({ userId, role }) {
  const token = getToken();

  const response = await api.post(
    "/auth/assign",
    { userId, role },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return response.data;
}
