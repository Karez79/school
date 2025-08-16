import { useState, useMemo } from 'react';
import { useTodoData, useTodoActions } from './useTodoActions';

export const useTodoList = () => {
  const { todos, loading, error } = useTodoData();
  const { addTodo, toggleTodoCompletion } = useTodoActions();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortEnabled, setSortEnabled] = useState(false);

  const filteredAndSortedTodos = useMemo(() => {
    let result = todos;

    if (searchQuery.trim()) {
      result = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    }

    if (isSortEnabled) {
      result = [...result].sort((a, b) =>
        a.title.localeCompare(b.title, 'en')
      );
    }

    return result;
  }, [todos, searchQuery, isSortEnabled]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSortToggle = () => {
    setSortEnabled(prev => !prev);
  };

  const handleAddTodo = async (title) => {
    if (!title?.trim()) {
      throw new Error('Title is required');
    }
    return addTodo(title);
  };

  const handleToggleCompletion = async (todo) => {
    if (!todo?.id) {
      throw new Error('Todo with ID is required');
    }
    return toggleTodoCompletion(todo);
  };

  return {
    todos: filteredAndSortedTodos,
    loading,
    error,
    searchQuery,
    isSortEnabled,
    handleSearch,
    handleSortToggle,
    handleAddTodo,
    handleToggleCompletion,
  };
};