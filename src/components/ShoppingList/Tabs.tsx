import React from "react";
import Button from "@components/ui/Button";

export interface TabsProps {
  onSelection: (tab: string) => void;
  activeTab: string;
}

const Tabs: React.FC<TabsProps> = ({ onSelection, activeTab }) => {
  const tabs = ["All", "Not Purchased", "Purchased"];

  return (
    <div className="w-full h-10 flex justify-center items-start gap-3 mt-4 mb-12">
      {tabs.map((tab) => (
        <Button
          key={tab}
          text={tab}
          onClick={() => onSelection(tab)}
          active={activeTab == tab}
        />
      ))}
    </div>
  );
};

export default Tabs;
