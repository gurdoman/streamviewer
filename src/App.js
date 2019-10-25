import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Logo name="logo" class="logo" />
      </header>
    </div>
  );
}

export default App;
