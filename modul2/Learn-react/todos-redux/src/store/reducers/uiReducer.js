const initialState = {
  loading: false,
  error: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };

    case 'TODOS_LOAD_REQUEST':
    case 'TODO_ADD_REQUEST':
    case 'TODO_UPDATE_REQUEST':
    case 'TODO_DELETE_REQUEST':
    case 'TODO_TOGGLE_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'TODOS_LOAD_SUCCESS':
    case 'TODO_ADD_SUCCESS':
    case 'TODO_UPDATE_SUCCESS':
    case 'TODO_DELETE_SUCCESS':
    case 'TODO_TOGGLE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };

    case 'TODOS_LOAD_FAILURE':
    case 'TODO_ADD_FAILURE':
    case 'TODO_UPDATE_FAILURE':
    case 'TODO_DELETE_FAILURE':
    case 'TODO_TOGGLE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default uiReducer;