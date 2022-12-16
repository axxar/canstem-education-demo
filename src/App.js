import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
}

export default App;
