import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../App.css';

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:3001/todos/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            navigate('/404');
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const taskData = await response.json();
        setTask(taskData);
        setEditedTitle(taskData.title);
      } catch (error) {
        console.error('Error loading task:', error);
        setError('Failed to load task');
      } finally {
        setLoading(false);
      }
    })();
  }, [id, navigate]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleToggleCompletion = async () => {
    const updatedTask = { ...task, completed: !task.completed };
    setTask(updatedTask);

    try {
      await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: updatedTask.completed }),
      });
    } catch (error) {
      console.error('Error updating task:', error);
      setTask(task); // Revert on error
    }
  };

  const handleSaveEdit = async () => {
    if (!editedTitle.trim()) return;

    const updatedTask = { ...task, title: editedTitle.trim() };
    setTask(updatedTask);
    setIsEditing(false);

    try {
      await fetch(`http://localhost:3001/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: updatedTask.title }),
      });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditedTitle(task.title);
    setIsEditing(false);
  };

  const handleDeleteTask = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await fetch(`http://localhost:3001/todos/${id}`, { method: 'DELETE' });
        navigate('/', { replace: true });
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className='todo'>
        <div className='task-detail__loading'>Loading task...</div>
      </div>
    );
  }

  if (error || !task) {
    return (
      <div className='todo'>
        <div className='task-detail__error'>
          <p>Task not found or failed to load.</p>
          <button className='todo__btn' onClick={handleGoBack}>
            ← Go Back
          </button>
        </div>
      </div>
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
                checked={task.completed}
                onChange={handleToggleCompletion}
              />
              <span>{task.completed ? 'Completed' : 'Not completed'}</span>
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
                <h3 className={`task-detail__title ${task.completed ? 'task-detail__title--completed' : ''}`}>
                  {task.title}
                </h3>
                <button 
                  className='task-detail__edit-btn'
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          <div className='task-detail__actions'>
            <button 
              className='todo__btn task-detail__delete-btn'
              onClick={handleDeleteTask}
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}