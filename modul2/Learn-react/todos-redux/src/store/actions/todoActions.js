import { ServiceFactory } from '../../services/ServiceFactory';

let todoServices = null;

export const initializeServices = (config = {}) => {
  todoServices = ServiceFactory.createTodoServices(config);
};

const getServices = () => {
  if (!todoServices) {
    initializeServices();
  }
  return todoServices;
};

export const loadTodos = () => {
  return async (dispatch) => {
    dispatch({ type: 'TODOS_LOAD_REQUEST' });
    
    try {
      const services = getServices();
      const todos = await services.businessLogic.getAllTodos();
      dispatch({ 
        type: 'TODOS_LOAD_SUCCESS', 
        payload: todos 
      });
    } catch (error) {
      dispatch({ 
        type: 'TODOS_LOAD_FAILURE', 
        payload: error.message 
      });
    }
  };
};

export const addTodo = (title) => {
  return async (dispatch) => {
    dispatch({ type: 'TODO_ADD_REQUEST' });
    
    try {
      const services = getServices();
      const newTodo = await services.businessLogic.createTodo(title);
      dispatch({ 
        type: 'TODO_ADD_SUCCESS', 
        payload: newTodo 
      });
      return newTodo;
    } catch (error) {
      dispatch({ 
        type: 'TODO_ADD_FAILURE', 
        payload: error.message 
      });
      throw error;
    }
  };
};

export const updateTodo = (id, updates) => {
  return async (dispatch) => {
    dispatch({ type: 'TODO_UPDATE_REQUEST' });
    
    try {
      const services = getServices();
      const updatedTodo = await services.businessLogic.updateTodo(id, updates);
      dispatch({ 
        type: 'TODO_UPDATE_SUCCESS', 
        payload: { id, updates } 
      });
      return updatedTodo;
    } catch (error) {
      dispatch({ 
        type: 'TODO_UPDATE_FAILURE', 
        payload: error.message 
      });
      throw error;
    }
  };
};

export const toggleTodoCompletion = (todo) => {
  return async (dispatch) => {
    dispatch({ type: 'TODO_TOGGLE_REQUEST' });
    
    try {
      const services = getServices();
      const updatedTodo = await services.businessLogic.toggleTodoCompletion(todo);
      dispatch({ 
        type: 'TODO_TOGGLE_SUCCESS', 
        payload: { id: todo.id } 
      });
      return updatedTodo;
    } catch (error) {
      dispatch({ 
        type: 'TODO_TOGGLE_FAILURE', 
        payload: error.message 
      });
      throw error;
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'TODO_DELETE_REQUEST' });
    
    try {
      const services = getServices();
      await services.businessLogic.deleteTodo(id);
      dispatch({ 
        type: 'TODO_DELETE_SUCCESS', 
        payload: id 
      });
    } catch (error) {
      dispatch({ 
        type: 'TODO_DELETE_FAILURE', 
        payload: error.message 
      });
      throw error;
    }
  };
};

export const getTodoById = (id) => {
  return async (dispatch) => {
    try {
      const services = getServices();
      const todo = await services.businessLogic.getTodoById(id);
      return todo;
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: error.message 
      });
      throw error;
    }
  };
};

export const clearError = () => ({
  type: 'CLEAR_ERROR'
});