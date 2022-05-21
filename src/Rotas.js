import styled from 'styled-components'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import NotFound from './Components/404/NotFound';
import Header from './Components/Header/Header';
import cookie from './Globals/Cookies';
import { useEffect, useState, useContext } from 'react';

export const UserContext = React.createContext();
function Rotas(props) {
  const [userName, setUserName] = useState('');
  return (
    <>
      <UserContext.Provider value={[userName, setUserName]}>
        <HashRouter>
          <Header />
          <Routes>
            <Route path='/index.html' element={<Login></Login>}/>
            <Route path='/' element={<Login></Login>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </HashRouter>
      </UserContext.Provider>
    </>
  );
}

export default Rotas;
