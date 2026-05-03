import Input from "../Input";
import styled from "styled-components";
import { useState } from 'react';

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #145315ff 35%, #49824aff 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        ont-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa() {
const [textoDigitado, setTextoDigitado] = useState('')
    return(
        <PesquisaContainer>
            <Titulo>Mexer, ou não mexer?</Titulo>
            <Subtitulo>Nossas poções são batidas. Nâo misturadas.</Subtitulo>
            <Input
                placeholder='O que está procurando?'
                onBlur= {evento => setTextoDigitado(evento.target.value)}    
            />
            <p>{textoDigitado}</p>
        </PesquisaContainer>
      
    )
}

export default Pesquisa;