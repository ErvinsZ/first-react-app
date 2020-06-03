import React from 'react';
import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import LatestRelease from './components/LatestRelease';


function App() {
  return (
    <div className="App">
      <Navbar title="Strivesturant" />
      <Jumbotron/>
      
      <Footer/>
    </div>
  );
}

export default App;
