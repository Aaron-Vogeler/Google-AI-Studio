
import React from 'react';

interface IconProps {
  className?: string;
  children: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({ className = 'w-6 h-6', children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
};
