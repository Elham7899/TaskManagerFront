import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white rounded-2xl shadow p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
export function CardHeader({ children, className = "" }) {
  return <div className={`mb-3 ${className}`}>{children}</div>;
}
export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
}
export function CardContent({ children, className = "" }) {
  return <div className={`text-sm ${className}`}>{children}</div>;
}
export function CardFooter({ children, className = "" }) {
  return <div className={`mt-4 ${className}`}>{children}</div>;
}
