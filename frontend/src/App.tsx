import { useEffect, useMemo, useState } from 'react';
import { getTodos, removeTodo } from './grpc/client';
import TodoForm from './components/TodoForm';
import { TodoItem } from './generated/todo_pb';
import Ttile from './components/Title';
import './App.css';

export default function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  const fetchTodos = async () => {
    try {
      const list = await getTodos();
      setTodos(list);
    } catch (err) {
      console.error('Failed to fetch todos', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const ok = await removeTodo(id);
      if (ok) {
        // also remove from completed set
        setCompletedIds(prev => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
        await fetchTodos();
      }
    } catch (err) {
      console.error('Failed to delete todo', err);
    }
  };

  const toggleComplete = (id: string) => {
    setCompletedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="page">
      <div className="card">
        <div className="headerRow">
          {/* <Ttile /> */}
          <h1 className="title">
            To-Do List <span className="titleIcon">📝</span>
          </h1>
        </div>

        <TodoForm onAdd={fetchTodos} />

        <ul className="todoList">
          {todos.map((todo) => {
            const id = todo.getId();
            const done = completedIds.has(id);

            return (
              <li className={`todoItem ${done ? 'done' : ''}`} key={id}>
                {/* clickable circle */}
                <button
                  type="button"
                  className={`checkBtn ${done ? 'checked' : ''}`}
                  aria-label={done ? 'Mark as not completed' : 'Mark as completed'}
                  onClick={() => toggleComplete(id)}
                />

                <span className="todoText">{todo.getTask()}</span>

                <button
                  className="deleteBtn"
                  aria-label="delete"
                  type="button"
                  onClick={() => handleDelete(id)}
                >
                  ×
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
