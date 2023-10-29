import React from 'react';
import './App.css'; // You can create an App.css file for styling

import Dropdown from './components/Dropdown';

function App() {
  // Sample list of items
  const items = ["Java", "Python", "C++", "C#", "Ruby", "Rust", "Go", "Kotlin", "Solidity"];

  return (
    <div className="App">
       <h1>React Dropdown List</h1>  
      <Dropdown items={items} /> 
    </div>
  );
}

export default App;
