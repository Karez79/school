import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data.slice(0, 10));
    };

    getTodos();
  }, []);

  return (
    <div className='todo'>
      <h2 className='todo__title'>Todo List</h2>
      <ul className='todo__list'>
        {todos.map((todo) => (
          <li key={todo.id} className={`todo__item ${todo.completed ? 'todo__item--done' : ''}`}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
