import { jwtDecode } from "jwt-decode";

export const TOKEN_KEY = "token";

export const setToken = (t) => localStorage.setItem(TOKEN_KEY, t);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const getTokenPayload = () => {
  const t = getToken();
  if (!t) return null;
  try {
    return jwtDecode(t);   
  } catch {
    return null;
  }
};

// helper to check roles — JWTs vary, so try multiple claim names
export const hasRole = (roleName) => {
  const p = getTokenPayload();
  if (!p) return false;

  const candidates = [
    p.role, 
    p.roles,
    p["role"], 
    p["roles"],
    p["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
  ];
  
  for (const c of candidates) {
    if (!c) continue;
    if (Array.isArray(c) && c.includes(roleName)) return true;
    if (typeof c === "string" && c === roleName) return true;
  }
  return false;
};
