import React, { useEffect, useState } from 'react';
import SidebarNav from './sidebar-nav';
import TopNav from './topnav';
import Footer from './footer';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

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
        className={`flex h-screen overflow-hidden transition-colors ${theme === "dark" ? "text-white" : "text-black"}`}
    >
        <SidebarNav isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div 
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : ""}`}
        >
        <TopNav theme={theme} setTheme={setTheme} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 overflow-auto min-h-0">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

Layout.displayName = 'Layout';

export default Layout;