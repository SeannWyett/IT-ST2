import React from 'react';
import { Moon, Sun } from 'lucide-react';
import Button from '../ui/button.jsx';

/**
 * Theme Toggle Button Component
 * @param {Object} props
 * @param {string} props.theme - Current theme ('light' or 'dark')
 * @param {Function} props.setTheme - Callback to change theme
 */
const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-md transition hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-gray-700" />
      ) : (
        <Sun size={20} className="text-yellow-400" />
      )}
    </button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
