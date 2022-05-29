import ConverterPage from "./components/ConverterPage/ConverterPage";
import Header from "./components/Header";
import CryptoPortfolioPage from "./components/CryptoPortfolioPage/CryptoPortfolioPage";
import React,{useEffect, useState} from "react";
import './App.css';
import {Route ,Routes} from 'react-router-dom';
function App() {

 
  return (
    <div className="App">
      <Header />
      <Routes>
     <Route path='/'  element={<ConverterPage />} />
     <Route path='/Portfolio'  element={ <CryptoPortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
