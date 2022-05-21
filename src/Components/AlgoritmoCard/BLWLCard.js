import { Box, Typography, TextField, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { getDatabase, ref, set, get, child } from "firebase/database";
import app from '../../Globals/firebase';

import Axios from 'axios';
import axios from 'axios';


export default function BLWLCard(props) {
    const [resultado, setResultado] = useState(false);
    const dbRef = ref(getDatabase());
    useEffect(() => {
        console.log('xego');
        console.log(props.url.props.children);
        get(child(dbRef, 'black_listed_urls')).then((snapshot) => {
            setResultado(false);
            if (snapshot.exists()) {
                snapshot.val().map(i => {
                    console.log(`${props.url.props.children} -> ${i}`);
                    if(props.url.props.children == i){
                        // console.log('igual.');
                        setResultado(true);
                    
                    }
                })

            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [props.url.props.children])

    return (
        <>
            <p style={{ textAlign: 'center', color: 'black'}}>PBWB Based</p>
            {/* Caso de certo.. */}
            {/* {resultado == false && <img style={{ width: '200px', borderRadius: '20px', marginBottom: '20px' }} src="https://cdn.dribbble.com/users/1005103/screenshots/4951068/security.gif"></img>} */}
            {/* {resultado == false && <label style={{ textAlign: 'center' }}>Esta página não está na base de dados como falsa, mas mesmo assim, tome cuidado!</label>} */}
            {resultado == false && <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black', color: 'rgb(34,189,26)'}}>Esta página não está na base de dados como FALSA, mas mesmo assim, tome cuidado!</h1>}
            {/* Caso de errado.. */}
            {resultado == true && <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black', color: 'red'}}>Essa página já é conhecida, e está classificada como FALSA!</h1>}
            {/* {resultado == true && <img style={{ width: '200px', borderRadius: '20px', marginBottom: '20px' }} src="https://i.pinimg.com/originals/cd/cf/1d/cdcf1d634cd7dcb1b9f5fc7ce321a9ed.gif"></img>} */}
            {/* {resultado == true && <label style={{ textAlign: 'center' }}><strong>Não recomendamos seguir!</strong> Página classificada como falsa no nosso banco de dados..</label>} */}

        </>
    )
}   