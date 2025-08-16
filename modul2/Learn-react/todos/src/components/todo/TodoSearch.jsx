import React from 'react';

export const TodoSearch = ({ 
  searchQuery, 
  onSearchChange, 
  isSortEnabled, 
  onSortToggle 
}) => {
  return (
    <div className='todo__panel'>
      <input
        className='todo__searchInput'
        placeholder='Search...'
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button
        className={`todo__sortButton ${isSortEnabled ? 'todo__sortButton--active' : ''}`}
        onClick={onSortToggle}
      >
        {isSortEnabled ? 'Sort ↑' : 'No Sort'}
      </button>
    </div>
  );
};