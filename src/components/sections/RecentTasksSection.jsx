import React from 'react';
import TaskCard from '../cards/taskcard';
import Button from '../ui/button';

/**
 * Recent Tasks Section - Displays recent tasks
 * @param {Array} tasks - Array of recent tasks
 * @param {Function} onViewAll - Callback for view all button
 */
const RecentTasksSection = ({ tasks, onViewAll }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Tasks</h2>
        <Button onClick={onViewAll} variant="secondary">
          View All
        </Button>
      </div>
      
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No tasks yet. Get started by creating one!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} onEdit={onViewAll} />
          ))}
        </div>
      )}
    </div>
  );
};

RecentTasksSection.displayName = 'RecentTasksSection';

export default RecentTasksSection;
