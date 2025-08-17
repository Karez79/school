import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { ErrorDisplay } from '../ui/ErrorDisplay';
import { selectLoading, selectError } from '../../store/selectors/todoSelectors';
import { getTodoById, updateTodo, toggleTodoCompletion, deleteTodo } from '../../store/actions/todoActions';
import '../../App.css';

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');

  useEffect(() => {
    const loadTodo = async () => {
      try {
        const todoData = await dispatch(getTodoById(parseInt(id)));
        setTodo(todoData);
        setEditedTitle(todoData.title);
      } catch (error) {
        console.error('Error loading todo:', error);
      }
    };
    
    loadTodo();
  }, [id, dispatch]);

  const handleToggleCompletion = async () => {
    try {
      await dispatch(toggleTodoCompletion(todo));
      setTodo(prev => ({ ...prev, completed: !prev.completed }));
    } catch (error) {
      console.error('Error toggling completion:', error);
    }
  };

  const handleStartEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  const handleSaveEdit = async () => {
    try {
      if (!editedTitle.trim()) {
        alert('Title cannot be empty');
        return;
      }
      
      await dispatch(updateTodo(todo.id, { title: editedTitle }));
      setTodo(prev => ({ ...prev, title: editedTitle }));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      if (window.confirm('Are you sure you want to delete this task?')) {
        await dispatch(deleteTodo(todo.id));
        navigate('/');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleGoBack = () => {
    navigate('/');
  };

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