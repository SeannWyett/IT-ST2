import React from 'react';
import { useTaskContext } from '../context/useTaskContext';
import { useRouter } from '../context/useRouter';
import TaskCard from '../components/cards/taskcard';
import Button from '../components/ui/button';

const TasksPage = () => {
  const { tasks } = useTaskContext();
  const { navigate } = useRouter();

  const tasksByStatus = {
    todo: tasks.filter(t => t.status === 'todo'),
    'in-progress': tasks.filter(t => t.status === 'in-progress'),
    done: tasks.filter(t => t.status === 'done')
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tasks</h1>
          <p className="text-gray-600">Manage all your tasks here</p>
        </div>
        <div>
          <Button onClick={() => navigate('home')} variant="primary">Back to Home</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">To Do ({tasksByStatus.todo.length})</h2>
          <div className="space-y-3">
            {tasksByStatus.todo.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-4">No tasks</p>
            ) : (
              tasksByStatus.todo.map(task => (
                <TaskCard key={task.id} task={task} onEdit={() => {}} />
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">In Progress ({tasksByStatus['in-progress'].length})</h2>
          <div className="space-y-3">
            {tasksByStatus['in-progress'].length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-4">No tasks</p>
            ) : (
              tasksByStatus['in-progress'].map(task => (
                <TaskCard key={task.id} task={task} onEdit={() => {}} />
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b">Done ({tasksByStatus.done.length})</h2>
          <div className="space-y-3">
            {tasksByStatus.done.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-4">No tasks</p>
            ) : (
              tasksByStatus.done.map(task => (
                <TaskCard key={task.id} task={task} onEdit={() => {}} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
