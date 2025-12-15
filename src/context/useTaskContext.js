import { useContext } from 'react';
import { TaskContext } from './taskcontext';

/**
 * Custom hook to use the Task Context
 * @returns {import('../type/index.jsx').TaskContextType}
 * @throws {Error} If used outside of TaskProvider
 */
const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTaskContext must be used within TaskProvider');
  return context;
};

export { useTaskContext };
