import './styles/App.css';
import React, { useState } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainBody from './pages/App';
import { OnBoard } from './pages/Onboard';
import { Login } from './pages/Login';
import { ChatPage } from './pages/chat/pages/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Feed } from './pages/feed/pages/Feed';

const App = ({...restProps}) => {

  return (
    <BrowserRouter>
        <Routes>

            <Route 
              path='/'
              element={<MainBody />} 
            />

            <Route 
              path='/chat'
              element={<ChatPage />} 
            />

            <Route 
              path='/onboard'
              element={<OnBoard />} 
            />

            <Route 
              path='/login'
              element={<Login />} 
            />

          <Route 
              path='/feed'
              element={<Feed />} 
            />


        </Routes>
      </BrowserRouter>
  );
}

export default App;

