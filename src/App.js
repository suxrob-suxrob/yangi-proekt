import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './Component/NavBar/NavBar';
import Demo from './Component/Pages/Demo';
import Home from "../src/Component/Pages/Home/Home";
import KeyFeader from './Component/Pages/KeyFeader';
import Proding from './Component/Pages/Proding';
import Testimonis from './Component/Pages/Testimonis';
import Section1 from './Component/Pages/Section1/Section';
// import HeaderPointer from './Component/HeaderPointer/HeaderPointer';

function App() {
  return (
    <div className="container">
       <NavBar />
       {/* <Home /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/features" element={< KeyFeader />} />
        <Route path="/pricing" element={<Proding />} />
        <Route path="/testimoniales" element={<Testimonis />} />
        <Route path="/demo" element={<Demo />} />
        <Route path='#' element={<Section1 />} />
      </Routes>
    </div>
  );
}

export default App;
