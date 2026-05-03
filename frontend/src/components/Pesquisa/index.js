import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getPocoes } from "../../services/itens";

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #02511cff 35%, #2b993dff 165%);
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
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [pocoesPesquisadas, setPocoesPesquisadas] = useState([])
    const [pocoes, setPocoes] = useState([])

    useEffect(() => {
        fetchPocoes()
    }, [])

    async function fetchPocoes() {
        const pocoesDaApi = await getPocoes()
        setPocoes(pocoesDaApi || [])
    }

    return (
        <PesquisaContainer>
            <Titulo>Mexer, ou não mexer?</Titulo>
            <Subtitulo>Batido. Não misturado.</Subtitulo>
            <Input
                placeholder="O que está procurando?"
                onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = (pocoes || []).filter(pocao => pocao.nome?.includes(textoDigitado))
                    setPocoesPesquisadas(resultadoPesquisa)
                }}
            />

            {pocoesPesquisadas.map(pocao => (
                <Resultado key={pocao.id}>
                    <p>{pocao.nome}</p>
                    <img
                        src={pocao.src}
                        alt="pocao"
                    />
                </Resultado>
            ))}
        </PesquisaContainer>


    )
}

export default Pesquisa;