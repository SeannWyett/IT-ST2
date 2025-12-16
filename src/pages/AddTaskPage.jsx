import React, { useState, useEffect } from 'react';
import { useTaskContext } from '../context/useTaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/ui/button';
import { Plus, X, Save } from 'lucide-react';

const AddTaskPage = () => {
  const { addTask, updateTask, tasks } = useTaskContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditing = !!id; // We're editing if there's an ID in the URL

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');

  useEffect(() => {
    if (id) {
      const task = tasks.find(t => t.id === id);
      if (task) {
        setTitle(task.title || '');
        setDescription(task.description || '');
        setStatus(task.status || 'todo');
      }
    } else {
      // Reset form for new task
      setTitle('');
      setDescription('');
      setStatus('todo');
    }
  }, [tasks, id]);

  // Show loading or error if editing but task not found
  if (id && !tasks.find(task => task.id === id)) {
    return (
      <div className="h-full bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <X size={32} className="text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Task Not Found</h1>
          <p className="text-gray-600 mb-6">The task you're trying to edit doesn't exist or may have been deleted.</p>
          <Button onClick={() => navigate('/tasks')} variant="primary">
            Back to Tasks
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (isEditing) {
      updateTask(id, {
        title,
        description,
        status
      });
    } else {
      addTask({
        id: Date.now().toString(),
        title,
        description,
        status,
        createdAt: new Date().toISOString()
      });
    }

    navigate('/tasks');
  };

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-900 p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {isEditing ? 'Edit Task' : 'Add New Task'}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {isEditing ? 'Update your task details below' : 'Create a new task to keep track of your work'}
            </p>
          </div>
          <Button onClick={() => navigate('/tasks')} variant="outline" className="hidden sm:flex">
            Back to Tasks
          </Button>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {isEditing ? 'Task Information' : 'Task Details'}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {isEditing ? 'Modify the task information as needed' : 'Fill in the details for your new task'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Title Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
              Task Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter a clear, descriptive title for your task"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">This will be the main identifier for your task</p>
          </div>

          {/* Description Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
              placeholder="Add any additional details, notes, or context for this task (optional)"
            />
            <p className="text-xs text-gray-500">Provide more context or specific instructions</p>
          </div>

          {/* Status Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white text-gray-900"
            >
              <option value="todo">📋 To Do - Not started yet</option>
              <option value="in-progress">⚡ In Progress - Currently working on</option>
              <option value="done">✅ Done - Completed</option>
            </select>
            <p className="text-xs text-gray-500">Set the initial status for this task</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
            <Button
              type="button"
              onClick={() => navigate('/tasks')}
              variant="outline"
              icon={<X size={18} />}
              className="sm:w-auto w-full"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="primary"
              icon={<Save size={18} />}
              disabled={!title.trim()}
              className="sm:w-auto w-full"
            >
              {isEditing ? 'Update Task' : 'Create Task'}
            </Button>
          </div>
        </form>
      </div>

      {/* Mobile Back Button */}
      <div className="mt-6 sm:hidden">
        <Button onClick={() => navigate('/tasks')} variant="outline" className="w-full">
          ← Back to Tasks
        </Button>
      </div>
    </div>
  );
};

export default AddTaskPage;
