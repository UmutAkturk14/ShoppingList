import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import type { Item } from "@interfaces/item";
import List from "./List";
import AddSection from "./AddSection";
import { Trash } from "lucide-react";

export interface MainComponentProps {
  text?: string;
}

const MainComponent: React.FC<MainComponentProps> = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("All");
  const [shoppingItems, setShoppingItems] = useState<Item[]>(() => {
    const stored = localStorage.getItem("shoppingList");
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.log("Failed to parse the list", error);
      return [];
    }
  });

  const addItem = () => {
    if (!input.trim()) return;

    const newItemID =
      shoppingItems.length === 0
        ? 1
        : shoppingItems[shoppingItems.length - 1].id + 1;

    const item: Item = {
      id: newItemID,
      description: input.trim(),
      purchased: false,
    };

    setShoppingItems((prevItems) => [...prevItems, item]);
    setInput("");
  };

  const handlePurchase = (item: Item) => {
    setShoppingItems((prevItems) =>
      prevItems.map((i) =>
        i.id === item.id ? { ...i, purchased: !i.purchased } : i
      )
    );
  };

  const handleRemove = (item: Item) => {
    setShoppingItems(shoppingItems.filter((i) => i.id != item.id));
  };

  const handleTabSelection = (tab: string) => {
    setMode(tab);
  };

  const clearList = () => {
    setShoppingItems([]);
  };

  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingItems));

    console.log(shoppingItems);
  }, [shoppingItems]);

  const shownItems = (): Item[] => {
    if (mode === "Purchased") {
      return shoppingItems.filter((item) => item.purchased === true);
    } else if (mode === "Not Purchased") {
      return shoppingItems.filter((item) => item.purchased === false);
    }
    return shoppingItems;
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="w-full max-w-lg justify-between bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4 min-h-[90svh]">
        <div>
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Shopping List
          </h1>

          <Tabs activeTab={mode} onSelection={handleTabSelection} />

          <AddSection
            onAdd={addItem}
            inputValue={input}
            onInputChange={(e) => setInput(e.target.value)}
          />

          <div className="flex-1 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-300">
            <List
              listItems={shownItems()}
              onPurchase={handlePurchase}
              onRemove={handleRemove}
            />
          </div>
        </div>
        {shoppingItems.length > 0 && (
          <button
            onClick={clearList}
            className="flex items-center justify-center gap-2 self-end rounded-xl border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <Trash className="w-4 h-4" />
            Clear the list
          </button>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
