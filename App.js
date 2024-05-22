import React from 'react';
import './App.css';
import GoalList from './components/GoalList.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <GoalList />
      </header>
    </div>
  );
}

export default App;