import { useState, useEffect } from "react";
import { getAllTasks, getTaskById } from "../api/tasks";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Alert, AlertDescription } from "../components/ui/alert";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState("");
  const [err, setErr] = useState("");

const fetchTasks = async () => {
  try {
    const taskList = await getAllTasks();
    console.log("Fetched tasks:", taskList);
    setTasks(Array.isArray(taskList) ? taskList : []);
    setErr("");
  } catch (error) {
    console.error("fetchTasks error:", error);
    setErr("Failed to load tasks");
    setTasks([]);
  }
};

const fetchTaskById = async (e) => {
  e.preventDefault();
  if (!taskId) return fetchTasks();
  try {
    const task = await getTaskById(taskId);
    setTasks(task ? [task] : []);
    setErr("");
  } catch (error) {
    if (error.response?.status === 401) {
      setErr("Unauthorized: Please log in again.");
    } else {
      setErr("Task not found");
    }
    setTasks([]);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="space-y-4">
      {err && (
        <Alert variant="destructive">
          <AlertDescription>{err}</AlertDescription>
        </Alert>
      )}

      {/* Filter Form */}
      <form onSubmit={fetchTaskById} className="flex space-x-2">
        <Input
          type="number"
          placeholder="Enter Task ID"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
        <Button type="submit">Filter</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setTaskId("");
            fetchTasks();
          }}
        >
          Reset
        </Button>
      </form>

      {/* Task List */}
      <ul className="space-y-2">
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className="p-4 border rounded bg-white">
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-xs text-gray-400">Status: {task.status}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No tasks found.</li>
        )}
      </ul>
    </div>
  );
}