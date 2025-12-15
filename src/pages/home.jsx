import React from 'react';
import { useTaskContext } from '../context/useTaskContext';
import { useRouter } from '../context/useRouter';
import StatsGrid from '../components/sections/StatsGrid';
import RecentTasksSection from '../components/sections/RecentTasksSection';
import QuickActionsSection from '../components/sections/QuickActionsSection';

const HomePage = () => {
  const { tasks } = useTaskContext();
  const { navigate } = useRouter();

  const stats = {
    total: tasks.length,
    todo: tasks.filter(t => t.status === 'todo').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length
  };

  const recentTasks = tasks.slice(0, 3);

  const handleViewAllTasks = () => navigate('tasks');

  return (
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to TaskFlow</h1>
          <p className="text-gray-600">Manage your tasks efficiently and boost productivity</p>
        </div>

        <StatsGrid stats={stats} />
        <RecentTasksSection tasks={recentTasks} onViewAll={handleViewAllTasks} />
        <QuickActionsSection onCreateTask={handleViewAllTasks} onViewAllTasks={handleViewAllTasks} />
      </div>

  );
};

export default HomePage;