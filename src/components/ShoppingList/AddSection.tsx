import React from "react";
import { PlusCircle } from "lucide-react";

export interface AddSectionProps {
  onAdd: () => void;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddSection: React.FC<AddSectionProps> = ({
  onAdd,
  inputValue,
  onInputChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAdd();
    }
  };

  return (
    <div className="flex w-full max-w-md items-center space-x-3 my-6">
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a new item..."
        className="flex-grow rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 shadow-sm placeholder-gray-400 transition focus:border-purple-500 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      />
      <button
        onClick={onAdd}
        className="rounded-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md transition duration-150 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 active:scale-95"
        title="Add item"
      >
        <PlusCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AddSection;
