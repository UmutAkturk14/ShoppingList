import React from "react";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-4 py-2 text-sm font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300
        ${
          active
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-purple-50 text-purple-700 hover:bg-purple-100"
        }
      `}
    >
      {text}
    </button>
  );
};

export default Button;
