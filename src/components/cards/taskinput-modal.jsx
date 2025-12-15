import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTaskContext } from '../../context/useTaskContext';

export default function TaskInputModal({ isOpen, onClose }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('personal');
    const { addTask } = useTaskContext();

    const categories = ['work', 'personal', 'shopping', 'health', 'other'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addTask({
                title: title.trim(),
                description: description.trim(),
                status: 'todo',
                category: category,
            });
            setTitle('');
            setDescription('');
            setCategory('personal');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200" onClick={onClose}>
            <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl transition-all duration-300" onClick={(e) => e.stopPropagation()}>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Add New Task</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 transition-colors hover:text-gray-600"
                    >
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Task Title
                                </label>
                                <input
                        type="text"
                                    placeholder="Enter task title..."
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
                                    required
                                />
                            </div>
                    
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description (optional)
                                </label>
                                <textarea
                                    placeholder="Enter task description..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows="3"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 resize-none"
                    />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 bg-white"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat} className="capitalize">
                                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                    
                            <div className="flex gap-3 pt-2">
                        <button 
                            type="submit"
                            className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-blue-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Add Task
                        </button>
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 active:scale-95"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}