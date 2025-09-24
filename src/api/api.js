import axios from "axios";

// Set your backend API base URL
const api = axios.create({
 baseURL: "http://localhost:5215/api", // change to your backend URL
});

export default api;
