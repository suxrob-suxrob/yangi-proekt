import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './Component/NavBar/NavBar';
import Demo from './Component/Pages/Demo';
import Home from './Component/Pages/Home';
import KeyFeader from './Component/Pages/KeyFeader';
import Proding from './Component/Pages/Proding';
import Testimonis from './Component/Pages/Testimonis';
// import HeaderPointer from './Component/HeaderPointer/HeaderPointer';

function App() {
  return (
    <div className="container">
       <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/features" element={< KeyFeader />} />
        <Route path="/pricing" element={<Proding />} />
        <Route path="/testimoniales" element={<Testimonis />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
