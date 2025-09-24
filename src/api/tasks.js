// src/api/tasks.js
import api from "../api/api";
import { getToken } from "../lib/auth"; // ✅ use this

export async function getAllTasks(page = 1, pageSize = 10) {
  const token = getToken();
  const response = await api.get(`/tasks?page=${page}&pageSize=${pageSize}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data.items;
}

export async function getTaskById(id) {
  const token = getToken();
  console.log("Token used in getTaskById:", token); // ✅ Add this
  const response = await api.get(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
}