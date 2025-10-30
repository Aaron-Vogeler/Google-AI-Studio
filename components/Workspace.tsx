
import React from 'react';
import { Block, BlockType, BlockData } from '../types';
import { BlockWrapper } from './BlockWrapper';
import { ProjectBlock } from './ProjectBlock';
import { TaskBlock } from './TaskBlock';
import { NoteBlock } from './NoteBlock';
import { ProjectBlockData, TaskBlockData, NoteBlockData } from '../types';

interface WorkspaceProps {
  blocks: Block[];
  updateBlock: (id: string, data: BlockData) => void;
  deleteBlock: (id:string) => void;
}

const renderBlock = (block: Block, onUpdate: (data: BlockData) => void) => {
  switch (block.type) {
    case BlockType.PROJECT:
      return <ProjectBlock data={block.data as ProjectBlockData} onUpdate={onUpdate} />;
    case BlockType.TASK:
      return <TaskBlock data={block.data as TaskBlockData} onUpdate={onUpdate} />;
    case BlockType.NOTE:
      return <NoteBlock data={block.data as NoteBlockData} onUpdate={onUpdate} />;
    default:
      return null;
  }
};

export const Workspace: React.FC<WorkspaceProps> = ({ blocks, updateBlock, deleteBlock }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blocks.map(block => (
          <BlockWrapper key={block.id} onDelete={() => deleteBlock(block.id)}>
              {renderBlock(block, (updatedData) => updateBlock(block.id, updatedData))}
          </BlockWrapper>
        ))}
        {blocks.length === 0 && (
             <div className="md:col-span-2 text-center py-24 text-theme-text-secondary">
                 <h2 className="text-2xl font-semibold">Your workspace is empty.</h2>
                 <p className="mt-2">Click the '+' button to add your first block!</p>
             </div>
        )}
      </div>
    </div>
  );
};
