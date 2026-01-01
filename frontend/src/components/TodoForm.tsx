import { useState } from 'react';
import { addTodo } from '../grpc/client';
import './TodoForm.css';

export default function TodoForm({ onAdd }: { onAdd: () => void }) {
  const [task, setTask] = useState('');

  const handleSubmit = async () => {
    if (task.trim()) {
      const success = await addTodo(task);
      if (success) {
        onAdd();
        setTask('');
      }
    }
  };

  return (
    <div className="todoForm">
      <input
        className="todoInput"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add your task"
      />
      <button className="addBtn" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
}
