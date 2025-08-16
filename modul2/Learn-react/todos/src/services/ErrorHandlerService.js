import { IErrorHandler } from './interfaces/ITodoService.js';

export class ErrorHandlerService extends IErrorHandler {
  constructor() {
    super();
    this.errorLog = [];
  }

  handleError(error, context = '') {
    const errorInfo = {
      message: error.message,
      context,
      timestamp: new Date().toISOString(),
      stack: error.stack
    };

    this.errorLog.push(errorInfo);
    console.error(`[${context}] Error:`, error);

    return this.formatErrorMessage(error);
  }

  formatErrorMessage(error) {
    if (error.message.includes('Failed to fetch')) {
      return 'Network error. Please check your connection and try again.';
    }

    if (error.message.includes('404')) {
      return 'Resource not found.';
    }

    if (error.message.includes('400')) {
      return 'Invalid request. Please check your input.';
    }

    if (error.message.includes('500')) {
      return 'Server error. Please try again later.';
    }

    if (error.message.includes('validation')) {
      return error.message;
    }

    return 'An unexpected error occurred. Please try again.';
  }

  getErrorLog() {
    return [...this.errorLog];
  }

  clearErrorLog() {
    this.errorLog = [];
  }
}