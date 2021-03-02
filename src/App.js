import React from "react";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import "./App.css";

const App = () => (
  <div className="app">
    <Sidebar />
    <Header />
  </div>
);

export default App;
