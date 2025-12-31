import { useState } from 'react';
import { addTodo } from '../grpc/client';

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
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
