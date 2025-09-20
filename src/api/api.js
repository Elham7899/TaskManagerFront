import axios from "axios";

// Set your backend API base URL
const api = axios.create({
  baseURL: "https://localhost:5001/api", // change to your backend URL
});

export default api;
