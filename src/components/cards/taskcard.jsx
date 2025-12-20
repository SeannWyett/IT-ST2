import React from "react";
import { Trash2, Edit2, Calendar, Tag } from "lucide-react";

/**
 * @param {Object} props
 * @param {Object} props.task
 * @param {Function} props.onEdit
 * @param {Function} props.onDelete
 */
const TaskCard = ({ task, onEdit, onDelete }) => {
  const statusColors = {
    todo: {
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      text: "text-yellow-800 dark:text-yellow-300",
      border: "border-yellow-200 dark:border-yellow-700",
    },
    "in-progress": {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-800 dark:text-blue-300",
      border: "border-blue-200 dark:border-blue-700",
    },
    done: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-800 dark:text-green-300",
      border: "border-green-200 dark:border-green-700",
    },
  };

  const statusConfig = statusColors[task.status] || {
    bg: "bg-gray-100 dark:bg-gray-700",
    text: "text-gray-800 dark:text-gray-200",
    border: "border-gray-200 dark:border-gray-600",
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1 leading-tight pr-2">
          {task.title}
        </h3>

        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}
        >
          {task.status.replace("-", " ")}
        </span>
      </div>

      {task.description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          {task.category && (
            <div className="flex items-center gap-1">
              <Tag size={12} />
              <span className="capitalize">{task.category}</span>
            </div>
          )}

          {task.createdAt && (
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{formatDate(task.createdAt)}</span>
            </div>
          )}
        </div>

        <div className="flex gap-1">
          <button
            onClick={() => onEdit(task.id)}
            className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md transition-colors"
            title="Edit task"
          >
            <Edit2 size={16} />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-md transition-colors"
            title="Delete task"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
