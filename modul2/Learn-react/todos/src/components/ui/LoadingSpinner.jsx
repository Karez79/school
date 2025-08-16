import React from 'react';

export const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className='todo'>
      <div className='task-detail__loading'>{message}</div>
    </div>
  );
};