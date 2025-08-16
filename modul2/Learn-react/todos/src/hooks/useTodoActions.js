import { useTodoContext } from '../contexts/TodoContext';

export const useTodoActions = () => {
  const { addTodo, updateTodo, deleteTodo, toggleTodoCompletion } = useTodoContext();

  return {
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoCompletion,
  };
};

export const useTodoData = () => {
  const { todos, loading, error } = useTodoContext();

  return {
    todos,
    loading,
    error,
  };
};

export const useTodoState = () => {
  const { clearError, reload } = useTodoContext();

  return {
    clearError,
    reload,
  };
};