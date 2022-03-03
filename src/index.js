import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// 1 BrowserRouter import qilamiz
// 2 BrowserRouter > App ni BrowserRouter ga o'rab qo'yamiz
//  <BrowserRouter>
//    <App />
//  </BrowserRouter>