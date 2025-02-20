import React, { useState } from "react";
import { CopyIcon, Mail, CheckCircle } from "lucide-react";
import Tooltip from "../common/Tooltip";

const FeedbackCard = ({
    icon,
    title,
    content,
    copyEmail,
    className
    }: {
    icon: React.ReactNode;
    title: string;
    content: string;
    copyEmail: string;
    className?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(copyEmail);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset icon after 2 seconds
  };

  return (
    <div className={`mx-auto border shadow-md p-4 md:max-w-xl bg-Primary-Mordor-Blue-Bg-50 ${className}`}>
      {/* Header */}
      <div className="flex justify-center md:justify-start mb-2">
        {icon}
      </div>
      {/* Content */}
      <h3 className="text-[1.125rem] leading-[1.688] font-semibold md:text-Body-Semibold-14 text-gray-800 mb-1">
        {title}
      </h3>
      <p className="text-gray-600 mb-2 text-sm">
        {content}
      </p>
      {/* Email Section */}
      <div className="flex items-center bg-Primary-Mordor-Blue-Bg-100 border p-2 justify-between">
        <Mail className="text-black w-4 h-4" />
        <a
          href={`mailto:${copyEmail}`}
          className="ml-2 text-[0.688rem] leading-[1.031rem] font-normal text-gray-800 hover:text-blue-600 break-all"
        >
          {copyEmail}
        </a>
        <Tooltip text="Copy Email">
          <button
            aria-label="Copy Email"
            className="md:ml-auto text-blue-500 hover:text-blue-600"
            onClick={handleCopyEmail}
          >
            {isCopied ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <CopyIcon className="w-4 h-4 text-black hover:text-blue-600" />
            )}
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default FeedbackCard;