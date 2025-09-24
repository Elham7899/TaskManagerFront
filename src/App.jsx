import React from "react";
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        📝 Task Manager
      </h1>

      <nav className="flex justify-center gap-4 mb-6">
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
      </nav>

      <Outlet />
    </div>
  );
}


export default App;
