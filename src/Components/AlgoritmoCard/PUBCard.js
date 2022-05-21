import { Box, Typography, TextField, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import axios from 'axios';


export default function PUBCard(props) {
    const [resultado, setResultado] = useState('');
    useEffect(() => {
        if (props.url) {
            axios.get(props.url.props.children[0] + props.url.props.children[1]).then(data => {
                setResultado(data.data);
                console.log(data.data);
            });
        }
    }, [props.url])
    return (
        <>
            <p style={{ textAlign: 'center', color: 'black' }}>PPUDB Based</p>
            {resultado && <div style={{width: '210px', borderRadius: '10px', marginBottom: '20px', backgroundColor: 'rgb(0,155,255)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{
                <div>
                    {resultado['result'].map(i => {
                        return (
                            <>
                                <p>{i}</p>
                            </>)
                    })}
                </div>
            }</div>} <p style={{color: 'black'}}>Fique atento com os links listados acima, pois são muito similares!</p>
            {/* {resultado && <label style={{ textAlign: 'center' }}>Esta página apresentou indícios de que é verdadeira!</label>} */}

        </>
    )
}   