import React from 'react';
import { Trash2, Edit2, CheckCircle } from 'lucide-react';

/**
 * @param {Object} props
 * @param {Object} props.task
 * @param {Function} props.onEdit
 */
const TaskCard = ({ task, onEdit }) => {

  const statusColors = {
    'todo': 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'done': 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{task.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[task.status] || 'bg-gray-100'}`}>
          {task.status.replace('-', ' ')}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-3">{task.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{task.category}</span>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button
            className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
