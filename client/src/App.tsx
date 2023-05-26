import React from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <div className="App dark">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
