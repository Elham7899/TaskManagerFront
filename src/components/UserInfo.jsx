// src/components/UserInfo.jsx
import { getTokenPayload, hasRole, removeToken } from "../lib/auth";

export default function UserInfo() {
  const payload = getTokenPayload();

  if (!payload) {
    return <p className="text-gray-600">Not logged in</p>;
  }

  // Try to extract a username/email from common claims
  const name =
    payload.unique_name ||
    payload.email ||
    payload.sub ||
    payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

  return (
    <div className="flex items-center gap-3 p-2 bg-gray-100 rounded">
      <span className="font-medium">{name}</span>
      {hasRole("Admin") && (
        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
          Admin
        </span>
      )}
      <button
        onClick={() => {
          removeToken();
          window.location.reload();
        }}
        className="ml-2 text-sm text-red-600 hover:underline"
      >
        Logout
      </button>
    </div>
  );
}
