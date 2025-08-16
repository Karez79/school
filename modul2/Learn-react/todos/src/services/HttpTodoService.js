import { ITodoService } from './interfaces/ITodoService.js';

export class HttpTodoService extends ITodoService {
  constructor(baseUrl = 'http://localhost:3001') {
    super();
    this.baseUrl = baseUrl;
  }

  async getAllTodos() {
    const response = await fetch(`${this.baseUrl}/todos`);
    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.status}`);
    }
    return await response.json();
  }

  async getTodoById(id) {
    const response = await fetch(`${this.baseUrl}/todos/${id}`);
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch todo: ${response.status}`);
    }
    return await response.json();
  }

  async createTodo(todo) {
    const response = await fetch(`${this.baseUrl}/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error(`Failed to create todo: ${response.status}`);
    }
    return await response.json();
  }

  async updateTodo(id, updates) {
    const response = await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error(`Failed to update todo: ${response.status}`);
    }
    return await response.json();
  }

  async deleteTodo(id) {
    const response = await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete todo: ${response.status}`);
    }
    return true;
  }
}