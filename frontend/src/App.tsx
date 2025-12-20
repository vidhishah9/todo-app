import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTask from './components/CreateTask';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />        
        <CreateTask />
        
      </header>
      
    </div>
  );
}

export default App;
