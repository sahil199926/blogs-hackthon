import React, { ReactNode } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
     <div className="relative flex items-center group">
      {children}
      <div className="absolute bottom-full mb-2 hidden w-28 p-2 text-center text-white bg-black rounded-md group-hover:block text-sm">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;