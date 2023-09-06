import React from "react";
interface MenuItem {
  text: string;
  Icon: React.ElementType;
  active: boolean;
}

function SidebarMenuItem({ text, Icon, active }: MenuItem) {
  return (
    <div className="hoverEffect flex items-center space-x-3 text-gray-700 justify-center xl:justify-start">
      <Icon className="h-7" />
      <span className={`${active && "font-bold text-black"} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
}

export default SidebarMenuItem;
