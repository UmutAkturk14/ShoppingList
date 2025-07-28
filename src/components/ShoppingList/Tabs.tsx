import React from "react";
import Button from "@components/ui/Button";

export interface TabsProps {
  text?: string;
  onSelection: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ onSelection }) => {
  return (
    <div className="w-full h-10 flex justify-center items-start gap-3">
      <Button onClick={() => onSelection("All")} text="All" />
      <Button
        onClick={() => onSelection("Not Purchased")}
        text="Not Purchased"
      />
      <Button onClick={() => onSelection("Purchased")} text="Purchased" />
    </div>
  );
};

export default Tabs;
