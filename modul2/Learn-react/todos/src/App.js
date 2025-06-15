import './App.css';
import Todo from './components/todo/Todo';
import TodoJsonSerever from './components/todo/TodoJsonSerever';

export default function App() {
  return (
    <div className='App'>
      <Todo />
      <TodoJsonSerever />
    </div>
  );
}
