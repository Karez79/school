import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodoActions } from './useTodoActions';
import { useTodoContext } from '../contexts/TodoContext';

export const useTodoDetail = (todoId) => {
  const navigate = useNavigate();
  const { updateTodo, deleteTodo, toggleTodoCompletion } = useTodoActions();
  const { getTodoById } = useTodoContext();
  
  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodo = async () => {
      if (!todoId) {
        navigate('/404');
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        const todoData = await getTodoById(todoId);
        if (!todoData) {
          navigate('/404');
          return;
        }
        
        setTodo(todoData);
        setEditedTitle(todoData.title);
      } catch (error) {
        console.error('Error loading todo:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTodo();
  }, [todoId, navigate, getTodoById]);

  const handleToggleCompletion = async () => {
    if (!todo) return;

    try {
      await toggleTodoCompletion(todo);
      setTodo(prev => ({ ...prev, completed: !prev.completed }));
    } catch (error) {
      console.error('Error toggling completion:', error);
      setError(error.message);
    }
  };

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditedTitle(todo.title);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  const handleSaveEdit = async () => {
    if (!editedTitle?.trim()) {
      setError('Title cannot be empty');
      return;
    }

    try {
      setError(null);
      await updateTodo(todoId, { title: editedTitle.trim() });
      setTodo(prev => ({ ...prev, title: editedTitle.trim() }));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating todo:', error);
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this todo?')) {
      return;
    }

    try {
      setError(null);
      await deleteTodo(todoId);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError(error.message);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return {
    todo,
    loading,
    error,
    isEditing,
    editedTitle,
    setEditedTitle,
    handleToggleCompletion,
    handleStartEdit,
    handleCancelEdit,
    handleSaveEdit,
    handleDelete,
    handleGoBack,
  };
};