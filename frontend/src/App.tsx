import { useEffect, useState } from 'react';
import { getTodos } from './grpc/client';
import TodoForm from './components/TodoForm';
import { TodoItem } from './generated/todo_pb';

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
    <div>
      <h1>Todos</h1>
      <TodoForm onAdd={fetchTodos} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.getId()}>{todo.getTask()}</li>
        ))}
      </ul>
    </div>
  );
}
