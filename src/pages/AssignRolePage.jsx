import { useState, useEffect } from "react";
import { assignRole } from "../api/auth";
import { getUsers } from "../api/users";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Alert, AlertDescription } from "../components/ui/alert";

export default function AssignRolePage() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setMessage("❌ Failed to load users");
      }
    };
    loadUsers();
  }, []);

  const handleAssign = async (e) => {
    e.preventDefault();
    try {
      await assignRole({ userId, role });
      setMessage("✅ Role assigned successfully");
    } catch (err) {
      setMessage("❌ Failed to assign role");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Assign Role</h2>

      {message && (
        <Alert>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleAssign} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Select User</label>
          <select
            className="w-full border rounded p-2"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="">-- Select User --</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.userName} ({u.email})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <Input
            placeholder="e.g. Admin"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full">
          Assign Role
        </Button>
      </form>
    </div>
  );
}
