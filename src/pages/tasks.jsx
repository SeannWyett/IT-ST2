import React from "react";
import { useTaskContext } from "../context/useTaskContext";
import { useNavigate } from "react-router-dom";
import TaskCard from "../components/cards/taskcard";
import Button from "../components/ui/button";
import { Plus, CheckCircle, Clock, AlertCircle } from "lucide-react";

const TasksPage = () => {
  const { tasks, deleteTask } = useTaskContext();
  const navigate = useNavigate();

  const tasksByStatus = {
    todo: tasks.filter((t) => t.status === "todo"),
    "in-progress": tasks.filter((t) => t.status === "in-progress"),
    done: tasks.filter((t) => t.status === "done"),
  };

  const handleEditTask = (taskId) => navigate(`/edit-task/${taskId}`);
  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  const statusConfig = {
    todo: {
      title: "To Do",
      icon: <AlertCircle size={20} />,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-700",
    },
    "in-progress": {
      title: "In Progress",
      icon: <Clock size={20} />,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-700",
    },
    done: {
      title: "Done",
      icon: <CheckCircle size={20} />,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-700",
    },
  };

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              All Tasks
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Manage and track your tasks efficiently
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/add-task")}
              variant="primary"
              icon={<Plus size={18} />}
            >
              Add New Task
            </Button>
            <Button onClick={() => navigate("/")} variant="outline">
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {Object.entries(tasksByStatus).map(([status, taskList]) => {
          const config = statusConfig[status];
          return (
            <div
              key={status}
              className={`rounded-xl p-6 border ${config.bgColor} ${config.borderColor}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${config.color} mb-1`}>
                    {config.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {taskList.length}
                  </p>
                </div>
                <div className={config.color}>{config.icon}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {Object.entries(tasksByStatus).map(([status, taskList]) => {
          const config = statusConfig[status];
          return (
            <div
              key={status}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div
                className={`px-6 py-4 border-b ${config.borderColor} ${config.bgColor}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={config.color}>{config.icon}</div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {config.title}
                    </h2>
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 px-2 py-1 rounded-full">
                    {taskList.length}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {taskList.length === 0 ? (
                  <div className="text-center py-12">
                    <div
                      className={`mx-auto w-12 h-12 ${config.bgColor} rounded-full flex items-center justify-center mb-4`}
                    >
                      <div className={config.color}>{config.icon}</div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      No tasks in {config.title.toLowerCase()}
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                      Tasks will appear here when added
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {taskList.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onEdit={() => handleEditTask(task.id)}
                        onDelete={handleDeleteTask}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Empty State */}
      {tasks.length === 0 && (
        <div className="text-center py-16">
          <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={32} className="text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No tasks yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get started by creating your first task
          </p>
          <Button
            onClick={() => navigate("/add-task")}
            variant="primary"
            icon={<Plus size={18} />}
          >
            Create Your First Task
          </Button>
        </div>
      )}
    </div>
  );
};

export default TasksPage;
