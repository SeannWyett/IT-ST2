import React from 'react';
import TaskCard from '../cards/taskcard';
import Button from '../ui/button';

/**
 * Recent Tasks Section - Displays recent tasks
 * @param {Array} tasks - Array of recent tasks
 * @param {Function} onViewAll - Callback for view all button
 * @param {Function} onEdit - Callback for edit task
 * @param {Function} onDelete - Callback for delete task
 */
const RecentTasksSection = ({ tasks, onViewAll, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Recent Tasks</h2>
        <Button onClick={onViewAll} variant="secondary">
          View All
        </Button>
      </div>
      
      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300 text-center py-8">No tasks yet. Get started by creating one!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} onEdit={() => onEdit(task.id)} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

RecentTasksSection.displayName = 'RecentTasksSection';

export default RecentTasksSection;
