import React, { use } from 'react';
import { useEffect, useState } from 'react';
import SidebarNav from './sidebar-nav';
import TopNav from './topnav';
import Footer from './footer';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [theme, setTheme] = React.useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }   
    }, [theme]);
  
    return (
    <div 
        className={`flex h-screen overflow-hidden transition-colors ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
        <SidebarNav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div 
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : ""}`}
        >
        <TopNav theme={theme} setTheme={setTheme} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

Layout.displayName = 'Layout';

export default Layout;