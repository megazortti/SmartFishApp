import styled from 'styled-components'
import React from 'react'
import { Avatar } from '@mui/material';
import { Main, HeaderDiv, LeftSide, RightSide, HeaderTitle } from './HeaderStyle'
import Drawer from '@mui/material/Drawer';
import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../Rotas.js';
import app from '../../Globals/firebase';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link } from "react-router-dom";


function Header(props) {
  const provider = new GoogleAuthProvider();
  function handleButtonClick() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        setUser(result);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  const [show, setShow] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const auth = getAuth();
  useEffect(() => {
    console.log(user)
  }, [])
  return (
    <>
      <Main>
        <Modal show={show} onHide={() => { setShow(false); }} keyboard={true}>
          <Modal.Header closeButton>
            <Modal.Title>{user['user'] && user['user']['displayName'] ? user['user']['displayName'] : 'Ajustes'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{user['user'] && user['user']['displayName'] ? <label>Bem vindo, {user['user']['displayName'].split(' ')[0]}.</label> : <label>Faça login para ver suas informações.</label>}</Modal.Body>
          <Modal.Footer>
            {user && <Button variant="secondary" onClick={() => { signOut(auth); alert('Obrigado por utilizar nossos serviços!'); setUser('') }}>
              Deslogar
            </Button>}
            {!user && <Button variant="primary" onClick={()=>{handleButtonClick()}}>
              Fazer Login
            </Button>}
          </Modal.Footer>
        </Modal>
        <HeaderDiv>
          <LeftSide>
            <HeaderTitle>StrongFish</HeaderTitle>
            <Link to="/about" style={{marginLeft: '100px', textDecoration: 'none'}}>Páginas testadas</Link>
          </LeftSide>
          <RightSide>
            {user['user'] ? <Avatar src={user['user']['photoURL']} style={{ cursor: 'pointer' }} onClick={() => { setShow(!show) }}  ></Avatar> : <Avatar style={{ cursor: 'pointer' }} onClick={() => { setShow(!show) }} />}
          </RightSide>
        </HeaderDiv>
      </Main>
    </>
  );
}

export default Header;
