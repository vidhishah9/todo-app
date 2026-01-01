import { useState } from 'react';
import { addTodo } from '../grpc/client';

export default function TodoForm({ onAdd }: { onAdd: () => void }) {
  const [task, setTask] = useState('');

  const handleSubmit = async () => {
    if (task.trim()) {
      const success = await addTodo(task); //calls addTodo from client with the current task user wants to add
      if (success) {
        onAdd();  //calls fetchTodos in App.tsx to refresh the todo list
        setTask(''); //clears the input field after successful addition
      }
    }
  };

  return (
    <div>
      <input
        value={task} //binds the input field value to the task state
        onChange={(e) => setTask(e.target.value)} //updates task to the value entered in the input field
        placeholder="Add a task"
      />
      <button onClick={handleSubmit}>Add</button> {/*calls handleSubmit when clicked*/}
    </div>
  );
}
