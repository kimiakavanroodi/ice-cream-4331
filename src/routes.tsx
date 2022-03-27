import './App.css';
import React, { useState } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainBody from './pages/App';

const App = ({...restProps}) => {

  return (
    <BrowserRouter>
      <Routes>

          <Route 
            path='/'
            element={<MainBody />} 
          />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

