import React from "react";

export function Alert({ children, variant = "default", className = "" }) {
  const base = "p-3 rounded";
  const variantClass =
    variant === "destructive"
      ? "bg-red-50 text-red-800 border border-red-200"
      : "bg-gray-50 text-gray-800 border border-gray-200";
  return <div className={`${base} ${variantClass} ${className}`}>{children}</div>;
}

export function AlertDescription({ children }) {
  return <div className="text-sm">{children}</div>;
}
