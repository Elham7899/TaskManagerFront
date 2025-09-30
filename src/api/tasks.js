// src/api/tasks.js
import api from "../lib/api";
import { getToken } from "../lib/auth";

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
  console.log("Token used in getTaskById:", token); // should log a string like "eyJhbGciOi..."

  const response = await api.get(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
