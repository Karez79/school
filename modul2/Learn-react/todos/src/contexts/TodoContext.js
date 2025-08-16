import React, { createContext, useContext, useState, useEffect } from 'react';
import { ServiceFactory } from '../services/ServiceFactory.js';

const TodoContext = createContext();

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

export const TodoProvider = ({ children, services = null, config = {} }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const todoServices = services || ServiceFactory.createTodoServices(config);
  const { businessLogic } = todoServices;

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const loadedTodos = await businessLogic.getAllTodos();
      setTodos(loadedTodos);
      setError(null);
    } catch (error) {
      console.error('Error loading todos:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title) => {
    try {
      const createdTodo = await businessLogic.createTodo(title);
      setTodos(previousTodos => [...previousTodos, createdTodo]);
      return createdTodo;
    } catch (error) {
      console.error('Error adding todo:', error);
      setError(error.message);
      throw error;
    }
  };

  const updateTodo = async (id, updates) => {
    try {
      const updatedTodo = await businessLogic.updateTodo(id, updates);
      setTodos(previousTodos =>
        previousTodos.map(todo =>
          todo.id === id ? { ...todo, ...updates } : todo
        )
      );
      return updatedTodo;
    } catch (error) {
      console.error('Error updating todo:', error);
      setError(error.message);
      throw error;
    }
  };

  const toggleTodoCompletion = async (todo) => {
    try {
      const updatedTodo = await businessLogic.toggleTodoCompletion(todo);
      setTodos(previousTodos =>
        previousTodos.map(t =>
          t.id === todo.id ? { ...t, completed: !t.completed } : t
        )
      );
      return updatedTodo;
    } catch (error) {
      console.error('Error toggling todo:', error);
      setError(error.message);
      throw error;
    }
  };

  const deleteTodo = async (id) => {
    try {
      await businessLogic.deleteTodo(id);
      setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError(error.message);
      throw error;
    }
  };

  const getTodoById = async (id) => {
    try {
      return await businessLogic.getTodoById(id);
    } catch (error) {
      console.error('Error getting todo:', error);
      setError(error.message);
      throw error;
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    todos,
    loading,
    error,
    addTodo,
    updateTodo,
    toggleTodoCompletion,
    deleteTodo,
    getTodoById,
    clearError,
    reload: loadTodos,
    services: todoServices,
  };

  return (
    <TodoContext value={value}>
      {children}
    </TodoContext>
  );
};