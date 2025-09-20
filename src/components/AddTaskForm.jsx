import { useState } from "react";
import api from "../lib/api";  
import { Button } from "@/components/ui/button"


export default function AddTaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const newTask = {
      title,                         // required
      isCompleted: false,            // optional but include
      createdAt: new Date().toISOString(),
      createdBy: "user1",
      labelIds: [],
      labelNames: [],
    };

    try {
      const res = await api.post("/tasks", newTask);   // ✅ api wrapper

      console.log("Task created:", res.data);

      if (onTaskCreated) {
        onTaskCreated(res.data.data); // backend returns ApiResponse<TaskDto>
      }

      setTitle(""); // reset input
    } catch (err) {
      console.error("Error creating task:", err);
      setError(
        err.response?.data?.message ||
        "Failed to create task. Check your API / role requirements."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white border border-blue-300 rounded-xl shadow-md space-y-4">
  <h2 className="text-xl font-semibold text-blue-700">Add New Task</h2>

  {error && <p className="text-red-500 text-sm">{error}</p>}

  <input
    type="text"
    placeholder="Task title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

 <Button disabled={loading}>
  {loading ? "Creating..." : "Add Task"}
</Button>


</form>
  );
}
