import React from 'react';
import { Home, ListTodo } from 'lucide-react';
import PropTypes from 'prop-types';
import { useRouter } from '../../context/useRouter';

const SidebarNav = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const { currentRoute, navigate } = useRouter();

    const menuItems = [
        { name: 'Dashboard', icon: <Home size={16} />, route: 'home' },
        { name: 'Tasks', icon: <ListTodo size={16} />, route: 'tasks' }
    ];


    if (!isSidebarOpen) return null;

    return (
        <aside className="h-screen shadow-lg transition-all fixed top-0 left-0 z-50 w-64 overflow-y-auto p-2">
            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.route}
                        onClick={() => navigate(item.route)}
                        className={`w-full text-left flex items-center p-3 rounded-lg transition ${
                            currentRoute === item.route
                                ? 'bg-gray-200 dark:bg-gray-700'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                    >
                        <div className="flex items-center justify-center w-12 h-12">{item.icon}</div>
                        <span className="ml-3 text-lg font-medium">{item.name}</span>
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
