
import React from 'react';
import { BlockType } from '../types';
import { PlusIcon } from './icons/PlusIcon';

interface AddBlockMenuProps {
  onAddBlock: (type: BlockType) => void;
}

const menuItems = [
    { type: BlockType.PROJECT, label: 'New Project' },
    { type: BlockType.TASK, label: 'New Task List' },
    { type: BlockType.NOTE, label: 'New Note' },
];

export const AddBlockMenu: React.FC<AddBlockMenuProps> = ({ onAddBlock }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleAdd = (type: BlockType) => {
        onAddBlock(type);
        setIsOpen(false);
    }

    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-12 h-12 bg-theme-primary text-white rounded-full shadow-lg hover:bg-theme-primary-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-theme-bg focus:ring-theme-primary"
                aria-label="Add new block"
            >
                <PlusIcon className="w-6 h-6" />
            </button>
            {isOpen && (
                <div 
                    className="absolute bottom-16 right-0 w-48 bg-theme-surface rounded-lg shadow-xl border border-theme-border py-2 z-10 animate-fade-in-up"
                    role="menu"
                >
                    {menuItems.map(item => (
                        <button 
                            key={item.type}
                            onClick={() => handleAdd(item.type)}
                            className="w-full text-left px-4 py-2 text-sm text-theme-text-primary hover:bg-theme-bg transition-colors duration-200"
                            role="menuitem"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
