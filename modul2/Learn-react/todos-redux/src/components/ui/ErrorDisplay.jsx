import React from 'react';

export const ErrorDisplay = ({ error, onRetry, onClear }) => {
  return (
    <div className='todo'>
      <div className='task-detail__error'>
        <p>Error: {error}</p>
        <div className='error__actions'>
          {onRetry && (
            <button className='todo__btn' onClick={onRetry}>
              Try Again
            </button>
          )}
          {onClear && (
            <button className='todo__btn' onClick={onClear}>
              Clear Error
            </button>
          )}
        </div>
      </div>
    </div>
  );
};