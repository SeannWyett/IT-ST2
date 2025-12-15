import React from 'react';
import { useRouter } from './context/useRouter';
import HomePage from './pages/home';
import TasksPage from './pages/tasks';
import Layout from './components/layout/layout';

const App = () => {
  const { currentRoute } = useRouter();

  const renderPage = () => {
    switch (currentRoute) {
      case 'tasks':
        return <TasksPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
};

App.displayName = 'App';

export default App;
