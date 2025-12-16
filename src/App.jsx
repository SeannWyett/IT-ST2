import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import TasksPage from './pages/tasks';
import AddTaskPage from './pages/AddTaskPage';
import Layout from './components/layout/layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/add-task" element={<AddTaskPage />} />
          <Route path="/edit-task/:id" element={<AddTaskPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
