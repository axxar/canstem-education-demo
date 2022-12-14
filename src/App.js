import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from "./components/Services";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Services" element={<Services />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
