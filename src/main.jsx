// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import TasksPage from "./pages/TasksPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AssignRolePage from "./pages/AssignRolePage";
import PrivateRoute from "./components/PrivateRoute";  // ✅ only this
import AddTaskForm from "./components/AddTaskForm";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // ✅ app layout (navbar etc.)
    children: [
      { index: true, element: <TasksPage /> },
      { path: "tasks/new", element: <AddTaskForm /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      {
        element: <PrivateRoute />, // ✅ only logged-in users can access
        children: [
          { path: "assign-role", element: <AssignRolePage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
