import React from 'react';
import { Home, ListTodo } from 'lucide-react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: <Home size={16} />, route: '/' },
        { name: 'Tasks', icon: <ListTodo size={16} />, route: '/tasks' }
    ];


    if (!isSidebarOpen) return null;

    return (
        <aside className="h-screen bg-white dark:bg-gray-800 shadow-lg transition-all fixed top-0 left-0 z-50 w-64 overflow-y-auto p-2">
            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.route}
                        onClick={() => {
                            navigate(item.route);
                            setIsSidebarOpen(false);
                        }}
                        className={`w-full text-left flex items-center p-3 rounded-lg transition ${
                            location.pathname === item.route
                                ? 'bg-gray-200 dark:bg-gray-700'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                    >
                        <div className="flex items-center justify-center w-12 h-12">{item.icon}</div>
                        <span className="ml-3 text-lg font-medium text-gray-900 dark:text-white">{item.name}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};

SidebarNav.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired,
    setIsSidebarOpen: PropTypes.func.isRequired
};

export default SidebarNav;
