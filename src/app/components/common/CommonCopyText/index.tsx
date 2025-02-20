"use client";

import React, { useState } from "react";
import { Copy, CircleCheckBig } from "lucide-react";

type TCommonCopyTextProps = {
  icon: React.ReactNode;      // An icon or any React node to show on the left
  text: string;               // The text that gets copied
  type: "number" | "email";   // For indicating "Copy number" or "Copy email"
};

const CommonCopyText: React.FC<TCommonCopyTextProps> = ({
  icon,
  text,
  type,
}) => {
  // Track if we've copied so we can swap icons/text
  const [copied, setCopied] = useState(false);
  // Track tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    // Revert "copied" state after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  // The content inside the tooltip
  const tooltipContent = copied ? (
    <span className="inline-flex items-center gap-1">
      <CircleCheckBig className="h-4 w-4 text-green-400" />
      Copied!
    </span>
  ) : (
    `Copy ${type}`
  );

  return (
    <div className="w-full relative inline-flex items-center gap-2 rounded-md bg-orange-50 p-2 text-sm font-semibold text-orange-600">
      {/* 1. Icon on the left side */}
      {icon}

      {/* 2. The text we want to copy */}
      <span className="text-Body-Medium-12 text-black">{text}</span>

      {/* 3. Copy button */}
      <button
        onClick={handleCopy}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="ml-auto inline-flex items-center justify-center rounded p-1 hover:bg-orange-100 focus:outline-none"
      >
        {/* Swap the button icon when "copied" is true */}
        {copied ? (
          <CircleCheckBig className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>

      {/* 4. The custom tooltip, absolutely positioned */}
      {showTooltip && (
        <div
          className="absolute bottom-[120%] left-[82%] md:left-[100%] -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 p-2 text-white shadow-md">
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default CommonCopyText;
