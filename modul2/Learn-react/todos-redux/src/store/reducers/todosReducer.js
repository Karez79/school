const initialState = {
  items: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODOS_LOAD_SUCCESS':
      return {
        ...state,
        items: action.payload,
      };

    case 'TODO_ADD_SUCCESS':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'TODO_UPDATE_SUCCESS':
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.payload.id 
            ? { ...todo, ...action.payload.updates }
            : todo
        ),
      };

    case 'TODO_TOGGLE_SUCCESS':
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.payload.id 
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case 'TODO_DELETE_SUCCESS':
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todosReducer;