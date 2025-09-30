// src/components/PrivateRoute.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../lib/auth";

export default function PrivateRoute() {
  const token = getToken();
  const location = useLocation();

  if (!token) {
    // redirect to login and remember where the user came from
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
