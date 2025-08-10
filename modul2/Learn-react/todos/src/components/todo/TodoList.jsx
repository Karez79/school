import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

export default function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortEnabled, setSortEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/todos');
        const loadedTodoItems = await response.json();
        setTodoItems(loadedTodoItems);
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    })();
  }, []);

  const handleAddTodoItem = async (formEvent) => {
    formEvent.preventDefault();
    if (!newTodoTitle.trim()) return;

    try {
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 1, title: newTodoTitle.trim(), completed: false }),
      });

      const createdTodoItem = await response.json();
      setTodoItems((previousTodoItems) => [...previousTodoItems, createdTodoItem]);
      setNewTodoTitle('');
    } catch (error) {
   
    }
  };

  const handleToggleTodoItemCompletion = async (targetTodoItem) => {
    setTodoItems((previousTodoItems) =>
      previousTodoItems.map((currentTodoItem) =>
        currentTodoItem.id === targetTodoItem.id
          ? { ...currentTodoItem, completed: !currentTodoItem.completed }
          : currentTodoItem
      )
    );

    try {
      await fetch(`http://localhost:3001/todos/${targetTodoItem.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !targetTodoItem.completed }),
      });
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleTaskClick = (todoItem) => {
  
    
    try {
      navigate(`/task/${todoItem.id}`);
    
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const truncateText = (text, maxLength = 50) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
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
        <button className='todo__btn' type='submit'>Add</button>
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
            <div className='todo__item-container'>
              <label className='todo__checkbox-label'>
                <input
                  type='checkbox'
                  checked={visibleTodoItem.completed}
                  onChange={() => handleToggleTodoItemCompletion(visibleTodoItem)}
                />
              </label>
              <span 
                className='todo__task-text'
                onClick={() => handleTaskClick(visibleTodoItem)}
              >
                {truncateText(visibleTodoItem.title)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}