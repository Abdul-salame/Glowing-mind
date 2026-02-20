import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-8">Page Not Found</p>
      <a href="/" className="text-blue-600 underline">Go Home</a>
    </div>
  );
}
