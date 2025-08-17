import { useMemo } from 'react';

export const selectTodos = (state) => state.todos.items;
export const selectLoading = (state) => state.ui.loading;
export const selectError = (state) => state.ui.error;
export const selectSearchQuery = (state) => state.filters.searchQuery;
export const selectIsSortEnabled = (state) => state.filters.isSortEnabled;

export const selectFilteredAndSortedTodos = (state) => {
  const todos = selectTodos(state);
  const searchQuery = selectSearchQuery(state);
  const isSortEnabled = selectIsSortEnabled(state);

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
};