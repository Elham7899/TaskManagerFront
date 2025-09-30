import api from "../lib/api";
import { getToken } from "../lib/auth";

export async function getUsers() {
  const token = getToken();
  const response = await api.get("/auth/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
