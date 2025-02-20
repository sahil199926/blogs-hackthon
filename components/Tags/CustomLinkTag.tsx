"use client";
import React from "react";
import Link from "next/link";

function CustomLinkTag({
  target,
  children,
  href,
  type,
  className,
}: {
  target?: string;
  href: string;
  className?: string;
  type?: string;
  handleLinkClick?: () => void;
  children: React.ReactNode;
}) {
  const handleLinkClick = () => {
    setTimeout(() => {
      window.history.replaceState(null, "", window.location.pathname);
    }, 0);
  };
  return (
    <Link
      className={className}
      type={type}
      onClick={handleLinkClick}
      target={target}
      href={href}
    >
      {children}
    </Link>
  );
}

export default CustomLinkTag;
