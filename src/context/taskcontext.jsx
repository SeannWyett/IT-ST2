import React, { createContext, useState } from 'react';

/**
 * @typedef {import('../type/index.jsx').Task} Task
 * @typedef {import('../type/index.jsx').TaskContextType} TaskContextType
 */

const TaskContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Complete project proposal',
      description: 'Write and submit the Q1 project proposal',
      status: 'in-progress',
      category: 'work',
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Buy groceries',
      description: 'Milk, eggs, bread, vegetables',
      status: 'todo',
      category: 'shopping',
      createdAt: new Date()
    },
    {
      id: '3',
      title: 'Gym workout',
      description: 'Complete upper body routine',
      status: 'done',
      category: 'health',
      createdAt: new Date()
    }
  ]);

  /**
   * @param {Omit<Task, 'id' | 'createdAt'>} task
   */
  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setTasks(prev => [newTask, ...prev]);
  };

  /**
   * @param {string} id
   * @param {Partial<Task>} updates
   */
  const updateTask = (id, updates) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, ...updates } : task));
  };

  /**
   * @param {string} id
   */
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.displayName = 'TaskProvider';

export default TaskProvider;
export { TaskContext };