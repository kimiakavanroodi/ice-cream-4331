import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <App />

    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
