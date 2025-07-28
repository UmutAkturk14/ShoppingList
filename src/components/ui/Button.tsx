import React from "react";

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border-b w-full h-full flex justify-center items-center hover:bg-emerald-200 transition duration-200"
    >
      {text}
    </div>
  );
};

export default Button;
