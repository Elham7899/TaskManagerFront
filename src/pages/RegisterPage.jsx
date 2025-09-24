// src/pages/RegisterPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as apiRegister } from "../api/auth";
import { setToken } from "../lib/auth";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Alert, AlertDescription } from "../components/ui/alert";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
   const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
  e.preventDefault();
  setErr("");
  try {
    const token = await apiRegister({ userName: username, email, password });
    if (!token) throw new Error("No token received");
    setToken(token);
    navigate("/");
  } catch (error) {
    setErr(error?.response?.data?.message ?? error.message ?? "Register failed");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          {err && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{err}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
             <div>
              <label className="block text-sm font-medium mb-1">UserName</label>
              <Input
                type="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username like sara"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
