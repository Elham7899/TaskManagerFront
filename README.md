## 🎨 Task Manager Frontend — React + Vite + Tailwind






Lightweight React frontend for the Task Manager API
, featuring JWT authentication, role management, and task operations.

## 🌟 Features

🔑 Authentication with JWT
👥 Role Management (assign roles to users)
✅ Task Management (list, filter, create, update)
🎨 Clean UI with Tailwind CSS + ShadCN components
🚦 Route protection using React Router (PrivateRoute & ProtectedRoute)
⚡ Powered by Vite for fast builds

## 📂 Project Structure
src/
 ├── api/            # API calls (auth, tasks, users)
 ├── components/     # Shared components (ProtectedRoute, UI, forms)
 ├── pages/          # Pages (Login, Register, AssignRole, Tasks)
 ├── lib/            # Auth & API helpers
 ├── main.jsx        # App entrypoint with routing
 └── index.css       # Tailwind base styles

## 🚀 Getting Started
### Prerequisites

Node.js 18+
Task Manager API running (backend repo)
Installation

# Clone repo
git clone https://github.com/Elham7899/TaskManagerFront.git
cd TaskManagerFront

# Install dependencies
npm install

# Start development server
npm run dev


## Frontend runs at:
👉 http://localhost:5173

## Backend runs at (default):
👉 http://localhost:5215

## 🔧 Configuration

Set your API base URL in src/lib/api.js:
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5215/api", // Backend URL
});

export default api;

## 🛠 Roadmap

 Polish UI with dashboards & charts
 Improve role-based access handling
 Add notifications (toasts) for API errors
 Deploy frontend to Vercel / Netlify

## 📜 License

MIT License — see LICENSE
 for details.

