import { LoginBody, Main, Image, Info, Algoritmos } from './LoginStyle.js'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import dbConfig from '../../Globals/firebase';
import cookie from '../../Globals/Cookies';
import { useState } from 'react';
import { useEffect, Suspense } from 'react';
import { UserContext } from '../../Rotas.js';
import { Box, Typography, TextField } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Mui_Button from '@mui/material/Button';
import { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SebCard from '../AlgoritmoCard/SebCard.js';
import BLWLCard from '../AlgoritmoCard/BLWLCard.js';
import PUBCard from '../AlgoritmoCard/PUBCard';
import Axios from 'axios';


export default function Login(props) {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useContext(UserContext);
    const [show, setShow] = useState(true)
    const [shouldSkeletonAlgorithmsAppear, setshouldSkeletonAlgorithmsAppear] = useState(false);
    const [textField, setTextField] = useState('');
    const [sebTextFieldPreview, setSebTextFieldPreview] = useState('');
    const [sebTextField, setSebTextField] = useState('');
    const [pubTextFieldPreview, setPubTextFieldPreview] = useState('');
    const [pubTextField, setPubTextField] = useState('');
    const [pbwbTextFieldPreview, setPbwbTextFieldPreview] = useState('');
    const [pbwbTextField, setPbwbTextField] = useState('');


    const auth = getAuth();

    useEffect(() => {
        if (textField.trim() != '' && textField.includes('www.') && textField.includes('.com')) {
            console.log('Possui condição necessária para executar algoritmo.')
            setshouldSkeletonAlgorithmsAppear(true);
        } else {
            setshouldSkeletonAlgorithmsAppear(false);
        }


    }, [textField])

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
    return (
        <>
            <Main>
                <LoginBody>
                    <Info>
                        <h4 style={{ textAlign: 'center', width: '100%', paddingTop: '20px'}}>Verifique se uma página é falsa ou não.</h4>
                        <Box sx={{ width: 500, maxWidth: '100%', color: 'white' }}>
                            <Tooltip title="Digite uma URL válida.." open={textField.length > 0 && !shouldSkeletonAlgorithmsAppear}>
                                <TextField onChange={(data) => { setTextField(data.target.value); console.log(data.target.value) }} inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }} fullWidth id="standard-basic" label="Insira a página web que você quer testar." variant="standard" color="info" />
                            </Tooltip>
                        </Box>
                        {shouldSkeletonAlgorithmsAppear ?
                            <Algoritmos style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <Box style={{ paddingTop: '30px', backgroundColor: 'white', marginLeft: '50px', marginRight: '50px', boxShadow: '0.5px 0.5px 0.5px white', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h3 style={{color: 'black'}}>Página analisada com o algoritmo <strong>Search Engine-Based </strong></h3>
                                    {/* <p style={{ textAlign: 'center', paddingLeft: '200px', paddingRight: '200px' }}>Este método faz leitura do conteúdo da página web em análise, utilizando seus textos, imagens ou URL(Uniform Resource Locator) como critério, utilizando-os em mecanismos de buscas como Google, Bing, Yahoo e entre outros a fim de determinar a popularidade da página, pois uma página web que possua pouca popularidade nos diversos mecanismos de buscas, possuem maior chance de serem praticantes de Phishing.</p> */}
                                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                        <SebCard seb={<>https://2330victor.pythonanywhere.com/seb/{textField}</>}></SebCard>
                                    </Box>
                                </Box>
                                <Box style={{ paddingTop: '30px', marginTop: '30px', backgroundColor: 'white', marginLeft: '50px', marginRight: '50px', boxShadow: '0.5px 0.5px 0.5px white', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <h3 style={{color: 'black', textAlign: 'center'}}>Página analisada com o algoritmo <br/> <strong>Phishing Blacklist and Whitelist Based </strong></h3>
                                    {/* <h4>Como o <strong>Phishing blacklist and whitelist based </strong> funciona ?</h4> */}
                                    {/* <p style={{ textAlign: 'center', paddingLeft: '200px', paddingRight: '200px' }}>Este método é responsável por comparar a página web em questão, utilizando de Banco de dados cujo dados representem páginas web que são identificadas como não praticantes de phishing e com bancos de dados cujos dados representam páginas web que foram classificadas como praticantes de Phishing. </p> */}
                                    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                        <BLWLCard url={<>{textField}</>}></BLWLCard>
                                    </Box>
                                </Box>
                                <Box style={{ width: '900px', paddingTop: '30px', marginTop: '30px', marginBottom: '50px', backgroundColor: 'white', marginLeft: '50px', marginRight: '50px', boxShadow: '0.5px 0.5px 0.5px white', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <h3 style={{color: 'black', textAlign: 'center'}}>Página analisada com o algoritmo <br/><strong>Phishing Proactive Url Detection Based </strong></h3>
                                    {/* <p style={{ textAlign: 'center', paddingLeft: '200px', paddingRight: '200px' }}>Este método é responsável por comparar a página web em questão, utilizando de Banco de dados cujo dados representem páginas web que são identificadas como não praticantes de phishing e com bancos de dados cujos dados representam páginas web que foram classificadas como praticantes de Phishing. </p> */}
                                    <Box style={{ width: '200px'}}>
                                        <PUBCard url={<>https://2330victor.pythonanywhere.com/pub/{textField}</>} ></PUBCard>
                                    </Box>
                                </Box>
                            </Algoritmos>
                            :
                            <box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column', marginTop: '30px'}}>
                                <img style={{ borderRadius: '20px', width: '400px'}} src='https://saltandmalt.co.uk/wp-content/themes/salt-and-malt/img/S&M_Fish_6.gif'></img>
                                <p style={{textAlign: 'center'}}>Por favor, digite uma Url válida para prosseguir.</p>
                            </box>}
                    </Info>

                </LoginBody>
            </Main>
        </>
    )
}
