import './styles/App.css';
import React, { useState } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainBody from './pages/App';
import { OnBoard } from './pages/Onboard';
import { Login } from './pages/Login';

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

            <Route 
              path='/login'
              element={<Login />} 
            />

        </Routes>
      </BrowserRouter>
  );
}

export default App;

