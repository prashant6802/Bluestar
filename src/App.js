import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.js";
import "./components/Navbar.css";
import GamesByGenre from "./components/GamesByGenre";
import GamesByPublisher from "./components/GamesByPublisher";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="genres/:genre" element={<GamesByGenre />} />
        <Route path="publishers/:genre" element={<GamesByPublisher />} />
      </Routes>
    </>
  );

}

export default App;
