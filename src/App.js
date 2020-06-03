import React from 'react';
import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';


function App() {
  return (
    <div className="App">
      <Navbar title="Strivesturant" />
      <Jumbotron/>
    </div>
  );
}

export default App;
