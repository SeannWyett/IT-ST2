/**
 * @typedef {'todo' | 'in-progress' | 'done'} TaskStatus
 */

/**
 * @typedef {'work' | 'personal' | 'shopping' | 'health' | 'other'} TaskCategory
 */

/**
 * @typedef {Object} Task
 * @property {string} id - Unique identifier for the task
 * @property {string} title - Task title
 * @property {string} description - Task description
 * @property {TaskStatus} status - Current status of the task
 * @property {TaskCategory} category - Category of the task
 * @property {Date} createdAt - Creation timestamp
 */

/**
 * @typedef {Object} TaskContextType
 * @property {Task[]} tasks - Array of all tasks
 * @property {(task: Omit<Task, 'id' | 'createdAt'>) => void} addTask - Add a new task
 * @property {(id: string, updates: Partial<Task>) => void} updateTask - Update an existing task
 * @property {(id: string) => void} deleteTask - Delete a task by ID
 */

export { };