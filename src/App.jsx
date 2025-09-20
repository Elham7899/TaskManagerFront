import React from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        📝 Task Manager
      </h1>

      {/* Simple navigation */}
      <nav className="flex justify-center gap-4 mb-6">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/tasks/new" className="text-blue-500 hover:underline">
          Add Task
        </Link>
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </nav>

      {/* Render child routes */}
      <Outlet />
    </div>
  );
}

export default App;
