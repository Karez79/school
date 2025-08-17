import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TodoItem = ({ todo, onToggleCompletion }) => {
  const navigate = useNavigate();

  const handleTaskClick = () => {
    try {
      navigate(`/task/${todo.id}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleToggle = async () => {
    try {
      await onToggleCompletion(todo);
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const truncateText = (text, maxLength = 50) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <li className={`todo__item ${todo.completed ? 'todo__item--done' : ''}`}>
      <div className='todo__item-container'>
        <label className='todo__checkbox-label'>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={handleToggle}
          />
        </label>
        <span 
          className='todo__task-text'
          onClick={handleTaskClick}
        >
          {truncateText(todo.title)}
        </span>
      </div>
    </li>
  );
};