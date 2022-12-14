import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
