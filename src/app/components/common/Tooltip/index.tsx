'use client';

import React, { useState, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: "top" | "right" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  const tooltipStyles: React.CSSProperties = {
    position: "absolute",
    padding: "8px 12px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "4px",
    fontSize: "12px",
    zIndex: 1000,
    transform: "translate(-50%, -50%)",
  };

  const getTooltipPosition = (position ?: "top" | "right" | "left") => {
    switch (position) {
      case "top":
        return { bottom: "100%", left: "50%", transform: "translate(-50%, -8px)" };
      case "right":
        return { top: "50%", left: "100%", transform: "translate(8px, -50%)" };
      case "left":
        return { top: "50%", right: "100%", transform: "translate(-8px, -50%)" };
      default:
        return { bottom: "100%", left: "50%", transform: "translate(-50%, -8px)" };
    }
  };

  const getArrowStyles = (position ?: "top" | "right" | "left") => {
    switch (position) {
      case "top":
        return {
          bottom: "-5px",
          left: "50%",
          transform: "translateX(-50%)",
          borderWidth: "5px 5px 0 5px",
          borderColor: "black transparent transparent transparent",
        };
      case "right":
        return {
          top: "50%",
          left: "-5px",
          transform: "translateY(-50%)",
          borderWidth: "5px 5px 5px 0",
          borderColor: "transparent black transparent transparent",
        };
      case "left":
        return {
          top: "50%",
          right: "-5px",
          transform: "translateY(-50%)",
          borderWidth: "5px 0 5px 5px",
          borderColor: "transparent transparent transparent black",
        };
      default:
        return {
          bottom: "-5px",
          left: "50%",
          transform: "translateX(-50%)",
          borderWidth: "5px 5px 0 5px",
          borderColor: "black transparent transparent transparent",
        };
    }
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div style={{ ...tooltipStyles, ...getTooltipPosition(position) }}>
          <p className="min-w-80">{content}</p>
          <div
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              borderStyle: "solid",
              ...getArrowStyles(position),
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;