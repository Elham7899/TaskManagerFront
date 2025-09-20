import { useEffect, useState } from "react";
import api from "../lib/api";   // ✅ use wrapper
import AddTaskForm from "./AddTaskForm";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks?page=1&pageSize=10");  // ✅ wrapper
      console.log("API Response:", res.data);
      setTasks(res.data.data.items); // ApiResponse<PagedResult<TaskDto>>
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      {/* Refresh list after adding */}
      <AddTaskForm onTaskCreated={() => fetchTasks()} />

      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
       <ul className="space-y-3">
  {tasks.map((task) => (
    <li
      key={task.id}
      className="flex justify-between items-center p-4 bg-blue-50 border border-blue-300 rounded-lg shadow-sm"
    >
      <span className="text-blue-800 font-medium">{task.title}</span>
      <span className={`text-sm font-semibold ${task.isCompleted ? "text-green-600" : "text-yellow-600"}`}>
        {task.isCompleted ? "✅ Done" : "⌛ Pending"}
      </span>
    </li>
  ))}
</ul>
      )}
    </div>
  );
}

export default TaskList;
