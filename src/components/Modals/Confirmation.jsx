import React from "react";

const Confirmation = ({
  showConfirmation,
  title,
  message,
  onProceed,
  onCancel,
}) => {
  return (
    <div
      className={`fixed inset-0 ${
        showConfirmation ? "flex" : "hidden"
      }  items-center justify-center z-50 bg-black bg-opacity-50`}
    >
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onCancel}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none"
            onClick={onProceed}
          >
            Proceed
          </button>
          <button
            className="text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
