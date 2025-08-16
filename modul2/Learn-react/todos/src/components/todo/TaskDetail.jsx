import React from 'react';
import { useParams } from 'react-router-dom';
import { useTodoDetail } from '../../hooks/useTodoDetail';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorDisplay } from '../ui/ErrorDisplay';
import '../../App.css';

export default function TaskDetail() {
  const { id } = useParams();
  const {
    todo,
    loading,
    error,
    isEditing,
    editedTitle,
    setEditedTitle,
    handleToggleCompletion,
    handleStartEdit,
    handleCancelEdit,
    handleSaveEdit,
    handleDelete,
    handleGoBack,
  } = useTodoDetail(id);

  if (loading) {
    return <LoadingSpinner message="Loading task..." />;
  }

  if (error || !todo) {
    return (
      <ErrorDisplay 
        error={error || 'Task not found'} 
        onRetry={null}
        onClear={null}
      />
    );
  }

  return (
    <div className='todo'>
      <div className='task-detail'>
        <div className='task-detail__header'>
          <button className='task-detail__back-btn' onClick={handleGoBack}>
            ← Back
          </button>
          <h2 className='todo__title'>Task Details</h2>
        </div>

        <div className='task-detail__content'>
          <div className='task-detail__status'>
            <label className='todo__label task-detail__completion-label'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={handleToggleCompletion}
              />
              <span>{todo.completed ? 'Completed' : 'Not completed'}</span>
            </label>
          </div>

          <div className='task-detail__title-section'>
            {isEditing ? (
              <div className='task-detail__edit-form'>
                <textarea
                  className='task-detail__edit-input'
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder='Enter task title...'
                  autoFocus
                />
                <div className='task-detail__edit-buttons'>
                  <button className='todo__btn' onClick={handleSaveEdit}>
                    Save
                  </button>
                  <button className='todo__btn task-detail__cancel-btn' onClick={handleCancelEdit}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className='task-detail__title-display'>
                <h3 className={`task-detail__title ${todo.completed ? 'task-detail__title--completed' : ''}`}>
                  {todo.title}
                </h3>
                <button 
                  className='task-detail__edit-btn'
                  onClick={handleStartEdit}
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className='task-detail__actions'>
            <button 
              className='todo__btn task-detail__delete-btn'
              onClick={handleDelete}
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}