import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background-color: ${props => props.theme.cardBackground};
    border: 1px solid ${props => props.theme.border};
    border-radius: 8px;
    display: flex;
    margin: 2rem auto;
    max-width: 700px;
    padding: 40px;
    justify-content: space-around;
    width: 100%;
    transition: all 0.3s ease;
    
    &:hover {
        border-color: ${props => props.theme.secondary};
        box-shadow: 0 0 20px ${props => props.theme.secondary}22;
    }
`

const Botao = styled.button`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.body};
    padding: 12px 20px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    font-family: ${props => props.theme.fontCode};
    font-weight: bold;
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 1rem;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.secondary};
    }
`

const Descricao = styled.p`
    max-width: 300px;
    color: ${props => props.theme.text}cc;
    line-height: 1.6;
`

const Subtitulo = styled.h4`
    color: ${props => props.theme.text};
    font-size: 18px;
    font-family: ${props => props.theme.fontCode};
    margin: 10px 0;
`

const CardMark = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 28px;
    border: 1px solid ${props => props.theme.border};
    background: radial-gradient(circle at 30% 30%, ${props => props.theme.secondary}44, transparent 60%),
      radial-gradient(circle at 70% 70%, ${props => props.theme.primary}33, transparent 65%),
      ${props => props.theme.cardBackground};
    box-shadow: 0 0 22px ${props => props.theme.secondary}1f;
`

function CardRecomenda({titulo, subtitulo, descricao}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="24px" cor={props => props.theme.primary} alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <CardMark aria-hidden="true" />
                <Botao>Analisar Componente</Botao>
            </div>
        </Card>  
    )
}

export default CardRecomenda
