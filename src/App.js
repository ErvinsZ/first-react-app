import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import WarningSign from "./components/WarningSign";

function App() {
  return (
    <div className="App">
      <NavBar title="StriveBooks" />
      <Home jumboTitle="Welcome to strivebooks" />
      <WarningSign/>
    </div>
  );
}

export default App;
