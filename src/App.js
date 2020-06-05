import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";


import Comments from "./components/Comments"

function App() {
  return (
    <div className="App">
      <NavBar title="StriveBooks" />
      <Home jumboTitle="Welcome to strivebooks" />
      <Comments/>
  
      
    </div>
  );
}

export default App;
