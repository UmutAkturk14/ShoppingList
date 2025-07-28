import React from "react";
import type { Item } from "@interfaces/item";
import { CheckCircle, Circle, Trash } from "lucide-react"; // Icon library

export interface ListProps {
  listItems: Item[];
  onPurchase: (item: Item) => void;
  onRemove: (item: Item) => void;
}

const List: React.FC<ListProps> = ({ listItems, onPurchase, onRemove }) => {
  return (
    <div className="w-full max-w-md space-y-2 px-2">
      {listItems.map((item: Item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm hover:bg-gray-50 transition"
        >
          <div className="flex-1 pr-4">
            <p className="text-sm text-gray-800 break-words">
              {item.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xl">{item.purchased ? "✅" : "✖️"}</p>
            <button
              onClick={() => onPurchase(item)}
              className="rounded-full p-2 hover:bg-purple-100 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400"
              title="Mark as Purchased"
            >
              {item.purchased ? (
                <CheckCircle className="w-5 h-5 text-purple-500" />
              ) : (
                <Circle className="w-5 h-5 text-gray-400" />
              )}
            </button>
            <button
              onClick={() => onRemove(item)}
              className="rounded-full p-2 hover:bg-purple-100 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400"
              title="Mark as Purchased"
            >
              <Trash className="w-5 h-5 text-purple-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
