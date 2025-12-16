import React from 'react';
import { Menu, Settings } from 'lucide-react';
import PropTypes from 'prop-types';
import ThemeToggle from '../ui/theme-toggle';

/**
 * Top Navigation Bar Component
 */



const TopNav = ({ theme, setTheme, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="bg-white dark:bg-gray-900 p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-800 transition rounded-lg"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} className="text-gray-900 dark:text-white" />
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">TaskFlow</h1>
      </div>

      <div className="flex items-center space-x-6">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

TopNav.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

TopNav.displayName = 'TopNav';

export default TopNav;
 