
import { Block, BlockType, Theme } from './types';

export const THEMES: Theme[] = [
  {
    name: 'Beige',
    className: 'theme-beige',
    properties: {
      '--theme-bg': '#F5F5DC',
      '--theme-surface': '#FFFBF0',
      '--theme-text-primary': '#5D4037',
      '--theme-text-secondary': '#A1887F',
      '--theme-border': '#D7CCC8',
      '--theme-primary': '#8D6E63',
      '--theme-primary-hover': '#795548',
    },
  },
  {
    name: 'Slate',
    className: 'theme-slate',
    properties: {
      '--theme-bg': '#1E293B',
      '--theme-surface': '#334155',
      '--theme-text-primary': '#F1F5F9',
      '--theme-text-secondary': '#94A3B8',
      '--theme-border': '#475569',
      '--theme-primary': '#64748B',
      '--theme-primary-hover': '#94A3B8',
    },
  },
  {
    name: 'Mint',
    className: 'theme-mint',
    properties: {
        '--theme-bg': '#F0FFF4',
        '--theme-surface': '#FFFFFF',
        '--theme-text-primary': '#2F4F4F',
        '--theme-text-secondary': '#3CB371',
        '--theme-border': '#98FB98',
        '--theme-primary': '#2E8B57',
        '--theme-primary-hover': '#20633d',
    },
  },
];

export const INITIAL_BLOCKS: Block[] = [
    {
        id: `project-${Date.now()}`,
        type: BlockType.PROJECT,
        data: {
            title: 'Zenith Workspace Launch',
            description: 'Coordinate all efforts to launch the new customizable project management tool.'
        }
    },
    {
        id: `task-${Date.now() + 1}`,
        type: BlockType.TASK,
        data: {
            title: 'Q3 Engineering Tasks',
            tasks: [
                { id: `task-item-1`, text: 'Implement theme switcher', completed: true },
                { id: `task-item-2`, text: 'Develop customizable block system', completed: true },
                { id: `task-item-3`, text: 'Design minimalist UI components', completed: false },
                { id: `task-item-4`, text: 'Setup initial project structure', completed: true },
            ]
        }
    },
    {
        id: `note-${Date.now() + 2}`,
        type: BlockType.NOTE,
        data: {
            title: 'Design Philosophy',
            content: 'The core principles are minimalism, speed, and customizability. The UI should be gentle and intuitive, avoiding unnecessary clutter. The beige color scheme promotes a calm and focused work environment.'
        }
    }
];
