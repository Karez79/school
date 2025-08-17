const initialState = {
  searchQuery: '',
  isSortEnabled: false,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload,
      };

    case 'TOGGLE_SORT':
      return {
        ...state,
        isSortEnabled: !state.isSortEnabled,
      };

    case 'RESET_FILTERS':
      return initialState;

    default:
      return state;
  }
};

export default filtersReducer;