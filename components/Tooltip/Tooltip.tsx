import React, { useState } from "react";

interface TooltipProps {
  description?: string;
  children?: any | React.ReactNode;
  direction?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ description, children, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <span className="containerTip" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {isVisible && <span className={`tooltip ${direction || "bottom"}`}>{description}</span>}
      {children}
    </span>
  );
};
