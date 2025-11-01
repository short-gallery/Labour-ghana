// Success.js
import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");

  const copyRef = () => {
    navigator.clipboard.writeText(reference || "");
    alert("Transaction ID copied!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white p-6">
      <div className="bg-white text-blue-900 p-8 rounded-2xl shadow-xl text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">✅ Subscription Successful!</h1>
        <p className="mb-3">
          Thank you for subscribing! Please keep this transaction ID for
          confirmation:
        </p>

        <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md mb-4">
          {reference ? reference : "No transaction ID found."}
        </div>

        {reference && (
          <button
            onClick={copyRef}
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg"
          >
            Copy Transaction ID
          </button>
        )}

        <p className="text-sm text-gray-600 mt-4">
          If you didn’t receive a confirmation message, please send this ID to
          our support team.
        </p>
      </div>
    </div>
  );
};

export default Success;
