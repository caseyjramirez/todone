import React from 'react';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <div className="App dark">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
