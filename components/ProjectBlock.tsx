
import React, { useState } from 'react';
import { ProjectBlockData } from '../types';

interface ProjectBlockProps {
  data: ProjectBlockData;
  onUpdate: (updatedData: ProjectBlockData) => void;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = ({ data, onUpdate }) => {
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
      onUpdate({ ...data, title: e.target.value });
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
      onUpdate({ ...data, description: e.target.value });
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Project Title"
        className="text-2xl font-bold text-theme-text-primary bg-transparent w-full focus:outline-none mb-2 tracking-tight"
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Add a project description..."
        className="w-full h-20 bg-transparent text-theme-text-secondary focus:outline-none resize-none"
      />
    </div>
  );
};
