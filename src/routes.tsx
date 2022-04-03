import './styles/App.css';
import React, { useState } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainBody from './pages/App';
import OnBoard from './pages/Onboard';

const App = ({...restProps}) => {

  return (
    <BrowserRouter>
        <Routes>

            <Route 
              path='/'
              element={<MainBody />} 
            />

            <Route 
              path='/onboard'
              element={<OnBoard />} 
            />

        </Routes>
      </BrowserRouter>
  );
}

export default App;

