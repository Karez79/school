import React, { useState } from 'react';

export const TodoForm = ({ onSubmit, disabled = false }) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!title.trim() || isSubmitting) return;

    try {
      setIsSubmitting(true);
      await onSubmit(title);
      setTitle('');
    } catch (error) {
      console.error('Error submitting todo:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className='todo__form' onSubmit={handleSubmit}>
      <input
        className='todo__input'
        placeholder='Add new task...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={disabled || isSubmitting}
      />
      <button 
        className='todo__btn' 
        type='submit' 
        disabled={disabled || isSubmitting || !title.trim()}
      >
        {isSubmitting ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
};