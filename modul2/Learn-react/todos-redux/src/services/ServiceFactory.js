import { HttpTodoService } from './HttpTodoService.js';
import { ValidationService } from './ValidationService.js';
import { ErrorHandlerService } from './ErrorHandlerService.js';
import { TodoBusinessLogic } from './TodoBusinessLogic.js';

export class ServiceFactory {
  static createTodoServices(config = {}) {
    const { baseUrl = 'http://localhost:3001' } = config;

    const todoService = new HttpTodoService(baseUrl);
    const validationService = new ValidationService();
    const errorHandler = new ErrorHandlerService();

    const businessLogic = new TodoBusinessLogic(
      todoService,
      validationService,
      errorHandler
    );

    return {
      businessLogic,
      todoService,
      validationService,
      errorHandler
    };
  }

  static createMockTodoServices() {
    const mockTodos = [
      { id: '1', title: 'Test Todo 1', completed: false, userId: 1 },
      { id: '2', title: 'Test Todo 2', completed: true, userId: 1 }
    ];

    const mockTodoService = {
      async getAllTodos() { return [...mockTodos]; },
      async getTodoById(id) { return mockTodos.find(todo => todo.id === id) || null; },
      async createTodo(todo) { 
        const newTodo = { ...todo, id: Date.now().toString() };
        mockTodos.push(newTodo);
        return newTodo;
      },
      async updateTodo(id, updates) {
        const index = mockTodos.findIndex(todo => todo.id === id);
        if (index !== -1) {
          mockTodos[index] = { ...mockTodos[index], ...updates };
          return mockTodos[index];
        }
        throw new Error('Todo not found');
      },
      async deleteTodo(id) {
        const index = mockTodos.findIndex(todo => todo.id === id);
        if (index !== -1) {
          mockTodos.splice(index, 1);
          return true;
        }
        throw new Error('Todo not found');
      }
    };

    const validationService = new ValidationService();
    const errorHandler = new ErrorHandlerService();

    const businessLogic = new TodoBusinessLogic(
      mockTodoService,
      validationService,
      errorHandler
    );

    return {
      businessLogic,
      todoService: mockTodoService,
      validationService,
      errorHandler
    };
  }
}