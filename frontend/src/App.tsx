import { useEffect, useState } from 'react';
import { getTodos } from './grpc/client';
import TodoForm from './components/TodoForm';
import { TodoItem } from './generated/todo_pb';
import Ttile from './components/Title';
import './App.css';

export default function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const fetchTodos = async () => {
    try {
      const list = await getTodos();
      setTodos(list);
    } catch (err) {
      console.error('Failed to fetch todos', err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="page">
      <div className="card">
        <div className="headerRow">
          <Ttile />
          <h1 className="title">To-Do List <span className="titleIcon">📝</span></h1>
        </div>

        <TodoForm onAdd={fetchTodos} />

        <ul className="todoList">
          {todos.map((todo, idx) => (
            <li className="todoItem" key={todo.getId() || `${todo.getTask()}-${idx}`}>
              <span className="todoText">{todo.getTask()}</span>
              <button className="deleteBtn" aria-label="delete" type="button">
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
