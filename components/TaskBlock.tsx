
import React, { useState } from 'react';
import { TaskBlockData, TaskItem } from '../types';
import { PlusIcon } from './icons/PlusIcon';

interface TaskBlockProps {
  data: TaskBlockData;
  onUpdate: (updatedData: TaskBlockData) => void;
}

const TaskListItem: React.FC<{
    task: TaskItem;
    onToggle: (id: string) => void;
}> = ({ task, onToggle }) => {
  return (
      <div 
        onClick={() => onToggle(task.id)}
        className="flex items-center space-x-3 cursor-pointer group"
      >
        <div className={`w-5 h-5 rounded border-2 border-theme-border flex items-center justify-center transition-all duration-300 ${task.completed ? 'bg-theme-primary border-theme-primary' : 'bg-transparent'}`}>
            {task.completed && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
        </div>
        <span className={`text-theme-text-primary transition-colors duration-300 ${task.completed ? 'line-through text-theme-text-secondary' : ''}`}>
            {task.text}
        </span>
      </div>
  );
};

export const TaskBlock: React.FC<TaskBlockProps> = ({ data, onUpdate }) => {
    const [newTaskText, setNewTaskText] = useState('');
    const [title, setTitle] = useState(data.title);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        onUpdate({ ...data, title: e.target.value });
    };

    const handleToggleTask = (id: string) => {
        const updatedTasks = data.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        onUpdate({ ...data, tasks: updatedTasks });
    };
    
    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTaskText.trim() === '') return;
        const newTask: TaskItem = {
            id: `task-item-${Date.now()}`,
            text: newTaskText,
            completed: false,
        };
        const updatedTasks = [...data.tasks, newTask];
        onUpdate({ ...data, tasks: updatedTasks });
        setNewTaskText('');
    };
    
    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Task List Title"
                className="text-xl font-semibold text-theme-text-primary bg-transparent w-full focus:outline-none mb-4"
            />
            <div className="space-y-3 mb-4">
                {data.tasks.map(task => (
                    <TaskListItem key={task.id} task={task} onToggle={handleToggleTask} />
                ))}
            </div>
            <form onSubmit={handleAddTask} className="flex items-center space-x-2 border-t border-theme-border pt-3 mt-3">
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Add a new task..."
                    className="flex-grow bg-transparent text-theme-text-primary focus:outline-none placeholder-theme-text-secondary/50"
                />
                <button type="submit" className="text-theme-primary hover:text-theme-primary-hover transition-colors duration-200">
                    <PlusIcon className="w-5 h-5"/>
                </button>
            </form>
        </div>
    );
};
