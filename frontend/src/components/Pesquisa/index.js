import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getPocoes } from "../../services/itens";

const PesquisaContainer = styled.section`
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.text};
        text-align: center;
        padding: 85px 0;
        width: 100%;
        border-bottom: 1px solid ${props => props.theme.border};
`

const Titulo = styled.h2`
        font-size: 36px;
        margin-bottom: 1rem;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-family: ${props => props.theme.fontCode};
        color: ${props => props.theme.secondary};
        margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: ${props => props.theme.cardBackground};
    border: 1px solid ${props => props.theme.border};
    padding: 1.5rem;
    border-radius: 8px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    transition: all 0.3s ease;
    
    .info {
        text-align: left;
        flex: 1;
    }

    .nome {
        font-family: ${props => props.theme.fontDisplay};
        color: ${props => props.theme.primary};
        font-size: 1.2rem;
        margin: 0;
    }

    .detalhes {
        font-family: ${props => props.theme.fontCode};
        font-size: 0.8rem;
        color: ${props => props.theme.text}88;
        margin-top: 0.5rem;
        display: flex;
        gap: 1rem;
    }

    .tipo {
        color: ${props => {
            if (props.tipo === 'berserk') return props.theme.secondary;
            if (props.tipo === 'cura') return '#4ade80';
            return '#60a5fa';
        }};
        text-transform: uppercase;
    }

    .preco {
        font-family: ${props => props.theme.fontCode};
        color: ${props => props.theme.primary};
        font-weight: bold;
        font-size: 1.1rem;
        margin-left: 1rem;
    }

    img {
        width: 80px;
        margin-right: 1.5rem;
        filter: drop-shadow(0 0 5px ${props => props.theme.primary}44);
    }

    &:hover {
        background-color: ${props => props.theme.cardHover};
        border-color: ${props => props.theme.primary};
        transform: scale(1.02);
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
        setPocoesPesquisadas(pocoesDaApi || []) // Mostrar todos inicialmente
    }

    return (
        <PesquisaContainer>
            <Titulo>Inventário de Zaun</Titulo>
            <Subtitulo>PRODUTOS QUIMTEC DISPONÍVEIS</Subtitulo>
            <Input
                placeholder="O que você busca para sua transmutação?"
                onChange={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = (pocoes || []).filter(pocao => 
                        pocao.nome?.toLowerCase().includes(textoDigitado.toLowerCase())
                    )
                    setPocoesPesquisadas(resultadoPesquisa)
                }}
            />

            {pocoesPesquisadas.map(pocao => (
                <Resultado key={pocao.id} tipo={pocao.tipo}>
                    <img
                        src={require(`../../img/${pocao.src}`)}
                        alt={pocao.nome}
                    />
                    <div className="info">
                        <p className="nome">{pocao.nome}</p>
                        <div className="detalhes">
                            <span className="tipo">{pocao.tipo}</span>
                            <span>Qtd: {pocao.quantidade}</span>
                        </div>
                    </div>
                    <div className="preco">
                        {pocao.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'ZAN', minimumFractionDigits: 1 })}
                    </div>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;