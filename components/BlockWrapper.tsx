
import React from 'react';
import { TrashIcon } from './icons/TrashIcon';

interface BlockWrapperProps {
  children: React.ReactNode;
  onDelete: () => void;
}

export const BlockWrapper: React.FC<BlockWrapperProps> = ({ children, onDelete }) => {
  return (
    <div className="bg-theme-surface p-6 rounded-xl shadow-md border border-theme-border/50 relative group transition-all duration-300 hover:shadow-lg hover:border-theme-border">
        {children}
        <button 
            onClick={onDelete}
            className="absolute top-4 right-4 text-theme-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-theme-primary focus:outline-none focus:ring-2 focus:ring-theme-primary rounded-full"
            aria-label="Delete block"
        >
            <TrashIcon className="w-5 h-5" />
        </button>
    </div>
  );
};
