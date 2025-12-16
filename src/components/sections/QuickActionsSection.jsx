import React from 'react';
import { Plus, ListTodo } from 'lucide-react';
import Button from '../ui/button';

/**
 * Quick Actions Section - Displays quick action buttons
 * @param {Function} onCreateTask - Callback for create task button
 * @param {Function} onViewAllTasks - Callback for view all tasks button
 */
const QuickActionsSection = ({ onCreateTask, onViewAllTasks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <Button onClick={onCreateTask} variant="primary" className="w-full justify-center">
            <Plus size={18} />
            Create New Task
          </Button>
          <Button onClick={onViewAllTasks} variant="secondary" className="w-full justify-center">
            <ListTodo size={18} />
            View All Tasks
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Productivity Tip</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Break down large tasks into smaller, manageable steps. This makes them less overwhelming 
          and helps you track progress more effectively.
        </p>
      </div>
    </div>
  );
};

QuickActionsSection.displayName = 'QuickActionsSection';

export default QuickActionsSection;
