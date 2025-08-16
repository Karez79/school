export class TodoBusinessLogic {
  constructor(todoService, validationService, errorHandler) {
    this.todoService = todoService;
    this.validationService = validationService;
    this.errorHandler = errorHandler;
  }

  async getAllTodos() {
    try {
      return await this.todoService.getAllTodos();
    } catch (error) {
      const userMessage = this.errorHandler.handleError(error, 'getAllTodos');
      throw new Error(userMessage);
    }
  }

  async getTodoById(id) {
    try {
      const validation = this.validationService.validateId(id);
      if (!validation.isValid) {
        throw new Error(`Validation error: ${validation.errors.join(', ')}`);
      }

      return await this.todoService.getTodoById(id);
    } catch (error) {
      const userMessage = this.errorHandler.handleError(error, 'getTodoById');
      throw new Error(userMessage);
    }
  }

  async createTodo(title, userId = 1) {
    try {
      const todo = {
        title: title?.trim(),
        userId,
        completed: false
      };

      const validation = this.validationService.validateTodo(todo);
      if (!validation.isValid) {
        throw new Error(`Validation error: ${validation.errors.join(', ')}`);
      }

      return await this.todoService.createTodo(todo);
    } catch (error) {
      const userMessage = this.errorHandler.handleError(error, 'createTodo');
      throw new Error(userMessage);
    }
  }

  async updateTodo(id, updates) {
    try {
      const idValidation = this.validationService.validateId(id);
      if (!idValidation.isValid) {
        throw new Error(`Validation error: ${idValidation.errors.join(', ')}`);
      }

      const updateValidation = this.validationService.validateTodoUpdate(updates);
      if (!updateValidation.isValid) {
        throw new Error(`Validation error: ${updateValidation.errors.join(', ')}`);
      }

      const processedUpdates = { ...updates };
      if (processedUpdates.title) {
        processedUpdates.title = processedUpdates.title.trim();
      }

      return await this.todoService.updateTodo(id, processedUpdates);
    } catch (error) {
      const userMessage = this.errorHandler.handleError(error, 'updateTodo');
      throw new Error(userMessage);
    }
  }

  async toggleTodoCompletion(todo) {
    if (!todo || !todo.id) {
      const error = new Error('Todo object with ID is required');
      const userMessage = this.errorHandler.handleError(error, 'toggleTodoCompletion');
      throw new Error(userMessage);
    }

    return this.updateTodo(todo.id, { completed: !todo.completed });
  }

  async deleteTodo(id) {
    try {
      const validation = this.validationService.validateId(id);
      if (!validation.isValid) {
        throw new Error(`Validation error: ${validation.errors.join(', ')}`);
      }

      return await this.todoService.deleteTodo(id);
    } catch (error) {
      const userMessage = this.errorHandler.handleError(error, 'deleteTodo');
      throw new Error(userMessage);
    }
  }
}