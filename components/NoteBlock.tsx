
import React, { useState } from 'react';
import { NoteBlockData } from '../types';

interface NoteBlockProps {
  data: NoteBlockData;
  onUpdate: (updatedData: NoteBlockData) => void;
}

export const NoteBlock: React.FC<NoteBlockProps> = ({ data, onUpdate }) => {
  const [content, setContent] = useState(data.content);
  const [title, setTitle] = useState(data.title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    onUpdate({ ...data, title: e.target.value });
  };
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onUpdate({ ...data, content: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Note Title"
        className="text-xl font-semibold text-theme-text-primary bg-transparent w-full focus:outline-none mb-2"
      />
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Start writing your note..."
        className="w-full h-40 bg-transparent text-theme-text-primary focus:outline-none resize-none placeholder-theme-text-secondary/50"
      />
    </div>
  );
};
