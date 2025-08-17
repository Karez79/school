export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  payload: query
});

export const toggleSort = () => ({
  type: 'TOGGLE_SORT'
});

export const resetFilters = () => ({
  type: 'RESET_FILTERS'
});