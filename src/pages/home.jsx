import React from 'react';
import { useTaskContext } from '../context/useTaskContext';
import { useNavigate } from 'react-router-dom';
import StatsGrid from '../components/sections/StatsGrid';
import RecentTasksSection from '../components/sections/RecentTasksSection';
import QuickActionsSection from '../components/sections/QuickActionsSection';

const HomePage = () => {
  const { tasks, deleteTask } = useTaskContext();
  const navigate = useNavigate();

  const stats = {
    total: tasks.length,
    todo: tasks.filter(t => t.status === 'todo').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length
  };

  const recentTasks = tasks.slice(0, 3);

  const handleViewAllTasks = () => navigate('/tasks');
  const handleAddTask = () => navigate('/add-task');
  const handleEditTask = (taskId) => navigate(`/edit-task/${taskId}`);
  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id);
    }
  };

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-900 p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to TaskFlow
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your tasks efficiently and boost productivity
          </p>
        </div>

        <StatsGrid stats={stats} />

        <RecentTasksSection
          tasks={recentTasks}
          onViewAll={handleViewAllTasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />

        <QuickActionsSection
          onCreateTask={handleAddTask}
          onViewAllTasks={handleViewAllTasks}
        />
    </div>
  );
};

export default HomePage;
