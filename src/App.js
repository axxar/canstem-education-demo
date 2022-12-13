import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Hero />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
