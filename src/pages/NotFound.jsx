import React from "react";
import { FaExclamationTriangle } from "react-icons/fa"; // Importing an icon for the error message

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-4">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to the homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
