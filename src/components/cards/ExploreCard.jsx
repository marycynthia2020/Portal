
import React from "react";
import Whitebutton from "../ui/Whitebutton";

export const ExplorerCardItem = ({
  backgroundColor,
  title,
  textColor = "white",
  children,
}) => {
  return (
    <div 
      className={`${backgroundColor} text-${textColor} p-8 relative overflow-hidden flex flex-col justify-between min-h-[400px]`}
    >
      <h3 className="text-2xl font-bold mb-8">{title}</h3>
      {children}
      <div className="mt-auto">
        <Whitebutton/>
      </div>
    </div>
  );
};
