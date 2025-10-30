import React, { useState, useEffect } from 'react';
import { Block, BlockType, Theme, BlockData } from './types';
import { INITIAL_BLOCKS, THEMES } from './constants';
import { Workspace } from './components/Workspace';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { AddBlockMenu } from './components/AddBlockMenu';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(THEMES[0]);
  const [blocks, setBlocks] = useState<Block[]>(INITIAL_BLOCKS);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.properties).forEach(([key, value]) => {
      // FIX: Explicitly cast value to string to resolve TypeScript error.
      // Some TypeScript configurations infer `value` from `Object.entries` as `unknown`.
      root.style.setProperty(key, value as string);
    });
    document.body.className = theme.className;
    document.body.style.backgroundColor = 'var(--theme-bg)';
  }, [theme]);

  const addBlock = (type: BlockType) => {
    let newBlockData: BlockData;
    switch (type) {
        case BlockType.PROJECT:
            newBlockData = { title: 'New Project', description: 'A brief description of this project.' };
            break;
        case BlockType.TASK:
            newBlockData = { title: 'New Task List', tasks: [] };
            break;
        case BlockType.NOTE:
            newBlockData = { title: 'New Note', content: '' };
            break;
    }
    const newBlock: Block = {
        id: `${type.toLowerCase()}-${Date.now()}`,
        type,
        data: newBlockData,
    };
    setBlocks(prevBlocks => [...prevBlocks, newBlock]);
  };
  
  const updateBlock = (id: string, updatedData: BlockData) => {
      setBlocks(prevBlocks =>
          prevBlocks.map(block =>
              block.id === id ? { ...block, data: updatedData } : block
          )
      );
  };

  const deleteBlock = (id: string) => {
    setBlocks(prevBlocks => prevBlocks.filter(block => block.id !== id));
  };


  return (
    <div className="min-h-screen w-full bg-theme-bg text-theme-text-primary font-sans transition-colors duration-500">
      <header className="p-4 flex justify-between items-center sticky top-0 z-10 bg-theme-bg/80 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-theme-text-primary">Zenith</h1>
        <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
      </header>
      
      <main>
        <Workspace blocks={blocks} updateBlock={updateBlock} deleteBlock={deleteBlock} />
      </main>

      <footer className="fixed bottom-6 right-6">
        <AddBlockMenu onAddBlock={addBlock} />
      </footer>
    </div>
  );
};

export default App;
