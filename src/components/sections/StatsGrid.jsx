import React from 'react';

/**
 * Stats Grid Component - Displays task statistics
 * @param {Object} stats - Task statistics
 */
const StatsGrid = ({ stats }) => {
  const statCards = [
    { label: 'Total', value: stats.total, color: 'text-blue-600' },
    { label: 'Todo', value: stats.todo, color: 'text-yellow-600' },
    { label: 'In Progress', value: stats.inProgress, color: 'text-blue-600' },
    { label: 'Done', value: stats.done, color: 'text-green-600' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
      {statCards.map((stat) => (
        <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

StatsGrid.displayName = 'StatsGrid';

export default StatsGrid;
