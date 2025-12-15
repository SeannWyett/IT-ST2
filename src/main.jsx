import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Router from './context/routercontext'
import TaskProvider from './context/taskcontext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Router>
  </StrictMode>,
)
