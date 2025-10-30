
import React from 'react';
import { THEMES } from '../constants';
import { Theme } from '../types';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, setTheme }) => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-theme-surface rounded-full shadow-sm border border-theme-border">
      {THEMES.map((theme) => (
        <button
          key={theme.name}
          onClick={() => setTheme(theme)}
          className={`w-8 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-theme-bg focus:ring-theme-primary ${
            currentTheme.name === theme.name ? 'ring-2 ring-theme-primary' : ''
          }`}
          style={{ backgroundColor: theme.properties['--theme-bg'] }}
          aria-label={`Switch to ${theme.name} theme`}
        >
           <div className="w-4 h-4 rounded-full mx-auto" style={{backgroundColor: theme.properties['--theme-primary']}}></div>
        </button>
      ))}
    </div>
  );
};
