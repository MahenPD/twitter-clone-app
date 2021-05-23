import React from "react";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import "./App.css";
import Feed from "./components/Feed";

function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
