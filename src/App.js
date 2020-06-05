import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import Comments from "./components/Comments"

function App() {
  return (
    <div className="App">
      <NavBar title="StriveBooks" />
      <Home jumboTitle="Welcome to strivebooks" />
      <Comments/>
      <WarningSign />
      <MyBadge />
    </div>
  );
}

export default App;
