import React from 'react';
import logo from './starter.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-font">
          Ops esta página está em construção!
          <p className="App-font">
            Tente entrar neste link para mais informações:
          </p>
        </p>

        <a
          className="App-link"
          href="https://rocketseat.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RocketSeat Online
        </a>
      </header>
    </div>
  );
}

export default App;
