import React from "react";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Routes from "./routes";
import TrackPlayer from "./components/track-player/trackPlayer.component";
import "./App.css";

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main">
      <Header />
      <Routes />
      <TrackPlayer />
    </div>
  </div>
);

export default App;
