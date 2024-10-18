/* eslint-disable react/prop-types */
import React from "react";
import Preview from "../pages/dashboard/preview";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-90"
        onClick={onClose}
      ></div>
      <div className="bg max-h-screen overflow-y-scroll rounded-lg shadow-lg p-8 z-10 w-full max-w-5xl relative">
        <button
          className="absolute top-0 right-0 m-4 text-white text-2xl hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <Preview />
      </div>
    </div>
  );
};

export default Modal;
