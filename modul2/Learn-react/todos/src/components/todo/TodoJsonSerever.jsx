import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function TodoJsonServer() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortEnabled, setSortEnabled] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/todos');
      const loadedTodoItems = await response.json();
      setTodoItems(loadedTodoItems);
    })();
  }, []);

  const handleAddTodoItem = async (formEvent) => {
    formEvent.preventDefault();
    if (!newTodoTitle.trim()) return;

    const response = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 1, title: newTodoTitle.trim(), completed: false }),
    });

    const createdTodoItem = await response.json();
    setTodoItems((previousTodoItems) => [...previousTodoItems, createdTodoItem]);
    setNewTodoTitle('');
  };

  const handleToggleTodoItemCompletion = async (targetTodoItem) => {
    setTodoItems((previousTodoItems) =>
      previousTodoItems.map((currentTodoItem) =>
        currentTodoItem.id === targetTodoItem.id
          ? { ...currentTodoItem, completed: !currentTodoItem.completed }
          : currentTodoItem
      )
    );

    await fetch(`http://localhost:3001/todos/${targetTodoItem.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !targetTodoItem.completed }),
    });
  };

  const handleDeleteTodoItem = async (todoItemId) => {
    setTodoItems((previousTodoItems) =>
      previousTodoItems.filter((currentTodoItem) => currentTodoItem.id !== todoItemId)
    );

    await fetch(`http://localhost:3001/todos/${todoItemId}`, { method: 'DELETE' });
  };

  const filteredTodoItems = searchQuery.trim()
    ? todoItems.filter((todoItem) => todoItem.title.toLowerCase().includes(searchQuery.trim().toLowerCase()))
    : todoItems;

  const sortedAndFilteredTodoItems = isSortEnabled
    ? [...filteredTodoItems].sort((firstItem, secondItem) => firstItem.title.localeCompare(secondItem.title, 'en'))
    : filteredTodoItems;

  return (
    <div className='todo'>
      <h2 className='todo__title'>Todo List</h2>

      <form className='todo__form' onSubmit={handleAddTodoItem}>
        <input
          className='todo__input'
          placeholder='Add new task...'
          value={newTodoTitle}
          onChange={(inputEvent) => setNewTodoTitle(inputEvent.target.value)}
        />
        <button className='todo__btn'>Add</button>
      </form>

      <div className='todo__panel'>
        <input
          className='todo__searchInput'
          placeholder='Search...'
          value={searchQuery}
          onChange={(inputEvent) => setSearchQuery(inputEvent.target.value)}
        />
        <button
          className={`todo__sortButton ${isSortEnabled ? 'todo__sortButton--active' : ''}`}
          onClick={() => setSortEnabled((previousValue) => !previousValue)}
        >
          {isSortEnabled ? 'Sort ↑' : 'No Sort'}
        </button>
      </div>

      <ul className='todo__list'>
        {sortedAndFilteredTodoItems.map((visibleTodoItem) => (
          <li key={visibleTodoItem.id} className={`todo__item ${visibleTodoItem.completed ? 'todo__item--done' : ''}`}>
            <label className='todo__label'>
              <input
                type='checkbox'
                checked={visibleTodoItem.completed}
                onChange={() => handleToggleTodoItemCompletion(visibleTodoItem)}
              />
              <span>{visibleTodoItem.title}</span>
            </label>
            <button
              className='todo__delete'
              onClick={() => handleDeleteTodoItem(visibleTodoItem.id)}
              aria-label='Delete'
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
