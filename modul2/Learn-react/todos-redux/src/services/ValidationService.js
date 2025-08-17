import { IValidationService } from './interfaces/ITodoService.js';

export class ValidationService extends IValidationService {
  validateTodo(todo) {
    const errors = [];

    if (!todo) {
      errors.push('Todo object is required');
      return { isValid: false, errors };
    }

    if (!todo.title || typeof todo.title !== 'string') {
      errors.push('Title is required and must be a string');
    } else if (todo.title.trim().length === 0) {
      errors.push('Title cannot be empty');
    } else if (todo.title.length > 200) {
      errors.push('Title cannot exceed 200 characters');
    }

    if (todo.userId !== undefined && (!Number.isInteger(todo.userId) || todo.userId <= 0)) {
      errors.push('UserId must be a positive integer');
    }

    if (todo.completed !== undefined && typeof todo.completed !== 'boolean') {
      errors.push('Completed must be a boolean');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateTodoUpdate(updates) {
    const errors = [];

    if (!updates || typeof updates !== 'object') {
      errors.push('Updates object is required');
      return { isValid: false, errors };
    }

    if (updates.title !== undefined) {
      if (typeof updates.title !== 'string') {
        errors.push('Title must be a string');
      } else if (updates.title.trim().length === 0) {
        errors.push('Title cannot be empty');
      } else if (updates.title.length > 200) {
        errors.push('Title cannot exceed 200 characters');
      }
    }

    if (updates.completed !== undefined && typeof updates.completed !== 'boolean') {
      errors.push('Completed must be a boolean');
    }

    if (updates.userId !== undefined && (!Number.isInteger(updates.userId) || updates.userId <= 0)) {
      errors.push('UserId must be a positive integer');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  validateId(id) {
    if (!id) {
      return { isValid: false, errors: ['ID is required'] };
    }

    const stringId = String(id).trim();
    if (!stringId) {
      return { isValid: false, errors: ['ID cannot be empty'] };
    }

    const isNumeric = /^\d+$/.test(stringId);
    const isAlphaNumeric = /^[a-zA-Z0-9]+$/.test(stringId);
    
    if (!isNumeric && !isAlphaNumeric) {
      return { isValid: false, errors: ['ID must be numeric or alphanumeric'] };
    }

    if (isNumeric && Number(stringId) <= 0) {
      return { isValid: false, errors: ['Numeric ID must be positive'] };
    }

    return { isValid: true, errors: [] };
  }
}