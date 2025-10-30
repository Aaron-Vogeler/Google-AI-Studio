
export enum BlockType {
  PROJECT = 'PROJECT',
  TASK = 'TASK',
  NOTE = 'NOTE',
}

export interface TaskItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface ProjectBlockData {
  title: string;
  description: string;
}

export interface TaskBlockData {
  title: string;
  tasks: TaskItem[];
}

export interface NoteBlockData {
  title: string;
  content: string;
}

export type BlockData = ProjectBlockData | TaskBlockData | NoteBlockData;

export interface Block {
  id: string;
  type: BlockType;
  data: BlockData;
}

export interface Theme {
  name: string;
  className: string;
  properties: {
    '--theme-bg': string;
    '--theme-surface': string;
    '--theme-text-primary': string;
    '--theme-text-secondary': string;
    '--theme-border': string;
    '--theme-primary': string;
    '--theme-primary-hover': string;
  };
}
