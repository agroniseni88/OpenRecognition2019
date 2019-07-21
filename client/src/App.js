import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {require("./demo-dummy-api/get.json")}  <br />
          {require("./demo-dummy-api/books/id/get.json")[0].title}
          {JSON.stringify(require("./demo-dummy-api/authors/allAuthors-get.json"))}
          {JSON.stringify(require("./demo-dummy-api/books/allTitles-get.json"))}

           
        </p>
      </header>
    </div>
  );
}

export default App;
