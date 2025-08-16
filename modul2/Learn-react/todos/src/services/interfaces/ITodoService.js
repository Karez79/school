export class ITodoService {
  async getAllTodos() {
    throw new Error('getAllTodos method must be implemented');
  }

  async getTodoById(id) {
    throw new Error('getTodoById method must be implemented');
  }

  async createTodo(todo) {
    throw new Error('createTodo method must be implemented');
  }

  async updateTodo(id, updates) {
    throw new Error('updateTodo method must be implemented');
  }

  async deleteTodo(id) {
    throw new Error('deleteTodo method must be implemented');
  }
}

export class IValidationService {
  validateTodo(todo) {
    throw new Error('validateTodo method must be implemented');
  }

  validateTodoUpdate(updates) {
    throw new Error('validateTodoUpdate method must be implemented');
  }
}

export class IErrorHandler {
  handleError(error, context) {
    throw new Error('handleError method must be implemented');
  }

  formatErrorMessage(error) {
    throw new Error('formatErrorMessage method must be implemented');
  }
}