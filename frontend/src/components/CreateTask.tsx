import React from 'react';
import logo from './logo.svg';
import './CreateTask.css';

function CreateTask() {
  return (
    <div className="CreateTask Row">
      <div className="create-task-container">
        <input type="text" className="taskInput" placeholder="Add a new task!" />
        <button type="button">Create Task</button>
      </div>
    </div>
  );
}

export default CreateTask;
