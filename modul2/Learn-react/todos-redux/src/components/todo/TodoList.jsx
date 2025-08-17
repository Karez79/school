import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorDisplay } from '../ui/ErrorDisplay';
import { TodoForm } from './TodoForm';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { 
  selectFilteredAndSortedTodos, 
  selectLoading, 
  selectError, 
  selectSearchQuery, 
  selectIsSortEnabled 
} from '../../store/selectors/todoSelectors';
import { 
  loadTodos, 
  addTodo, 
  toggleTodoCompletion, 
  clearError 
} from '../../store/actions/todoActions';
import { setSearchQuery, toggleSort } from '../../store/actions/filterActions';
import '../../App.css';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectFilteredAndSortedTodos);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const searchQuery = useSelector(selectSearchQuery);
  const isSortEnabled = useSelector(selectIsSortEnabled);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleAddTodo = async (title) => {
    if (!title?.trim()) {
      throw new Error('Title is required');
    }
    return dispatch(addTodo(title));
  };

  const handleToggleCompletion = async (todo) => {
    if (!todo?.id) {
      throw new Error('Todo with ID is required');
    }
    return dispatch(toggleTodoCompletion(todo));
  };

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query));
  };

  const handleSortToggle = () => {
    dispatch(toggleSort());
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  const handleReload = () => {
    dispatch(loadTodos());
  };

  if (loading) {
    return <LoadingSpinner message="Loading todos..." />;
  }

  if (error) {
    return (
      <ErrorDisplay 
        error={error} 
        onRetry={handleReload}
        onClear={handleClearError}
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