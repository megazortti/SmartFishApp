import { Box, Typography, TextField, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import axios from 'axios';


export default function SebCard(props) {
    const [resultado, setResultado] = useState('');
    useEffect(() => {
        if (props.seb) {
            console.log(props);
            axios.get(props.seb.props.children[0] + props.seb.props.children[1]).then(data => {
                setResultado(data);
                console.log(props.seb.props.children[0] + props.seb.props.children[1])
                console.log(data.data['result']);
                console.log(data.data);
            });
        }
    }, [props.seb])
    return (
        <>
            <p style={{textAlign: 'center', color: 'black'}}>SEB Based</p>
            {/* Caso de certo.. */}
            {/* {resultado && resultado.data['result'] == true && <img style={{ width: '200px', borderRadius: '20px', marginBottom: '20px' }} src="https://cdn.dribbble.com/users/1005103/screenshots/4951068/security.gif"></img>} */}
            {resultado && resultado.data['result'] == true && <h1 style={{ textAlign: 'center', textShadow: '1px 1px 2px black', color: 'rgb(34,189,26)'}}>Esta página apresentou indícios de que é verdadeira!</h1>}
            {/* Caso de errado.. */}
            {/* {resultado && resultado.data['result'] == false && <img style={{ width: '200px', borderRadius: '20px', marginBottom: '20px' }} src="https://i.pinimg.com/originals/cd/cf/1d/cdcf1d634cd7dcb1b9f5fc7ce321a9ed.gif"></img>} */}
            {resultado && resultado.data['result'] == false && <h1 style={{ textAlign: 'center', color: 'red' }}>Tome cuidado! Essa página não apresentou um rank satisfatório no google.</h1>}
            
        </>
    )
}   