import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { TodoProvider } from './contexts/TodoContext';
import TodoList from './components/todo/TodoList';
import TaskDetail from './components/todo/TaskDetail';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <TodoProvider>
          <Routes>
            <Route path='/' element={<TodoList />} />
            <Route path='/task/:id' element={<TaskDetail />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </TodoProvider>
      </Router>
    </div>
  );
}
