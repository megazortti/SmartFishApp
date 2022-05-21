
import {Title, Main, img} from './NotFoundStyle';
import deadFish from './imgs/deadFish.png'

export default function NotFound(props){
    const imgStyle={
        width: '200px',
        height: '200px'
    }
    return(
        <>
            <Main>
                <Title>A página que você está tentando acessar não existe ou deixou de existir..</Title>
                <img style={imgStyle} src={deadFish}/>
            </Main>
        </>

    )

}