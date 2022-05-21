import React from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import NotFound from './Components/404/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Rotas from './Rotas'
ReactDOM.render(
  <React.StrictMode>
      <Rotas/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
