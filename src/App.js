import React from "react";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Routes from "./routes";
import "./App.css";

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main">
      <Header />
      <Routes />
    </div>
  </div>
);

export default App;
