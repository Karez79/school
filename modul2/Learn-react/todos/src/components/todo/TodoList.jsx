import React from 'react';
import { useTodoState } from '../../hooks/useTodoActions';
import { useTodoList } from '../../hooks/useTodoList';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorDisplay } from '../ui/ErrorDisplay';
import { TodoForm } from './TodoForm';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import '../../App.css';

export default function TodoList() {
  const { clearError, reload } = useTodoState();
  const {
    todos,
    loading,
    error,
    searchQuery,
    isSortEnabled,
    handleSearch,
    handleSortToggle,
    handleAddTodo,
    handleToggleCompletion,
  } = useTodoList();

  if (loading) {
    return <LoadingSpinner message="Loading todos..." />;
  }

  if (error) {
    return (
      <ErrorDisplay 
        error={error} 
        onRetry={reload}
        onClear={clearError}
      />
    );
  }

  return (
    <div className='todo'>
      <h2 className='todo__title'>Todo List</h2>

      <TodoForm onSubmit={handleAddTodo} />

      <TodoSearch
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        isSortEnabled={isSortEnabled}
        onSortToggle={handleSortToggle}
      />

      <ul className='todo__list'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleCompletion={handleToggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
}