import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getPocoes } from "../../services/itens";
import { useCart } from "../../contexts/CartContext";

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

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
`

const ModalCard = styled.div`
    background: ${props => props.theme.cardBackground};
    border: 2px solid ${props => props.theme.primary};
    padding: 2rem;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 0 30px ${props => props.theme.primary}33;
    animation: reveal 0.3s ease-out;

    @keyframes reveal {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }

    .close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        color: ${props => props.theme.text};
        font-size: 1.5rem;
        cursor: pointer;
        &:hover { color: ${props => props.theme.secondary}; }
    }

    .modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    img {
        width: 150px;
        margin-bottom: 1.5rem;
        filter: drop-shadow(0 0 15px ${props => props.theme.primary}66);
    }

    h4 {
        font-family: ${props => props.theme.fontDisplay};
        color: ${props => props.theme.primary};
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }

    .descricao {
        font-family: ${props => props.theme.fontBody};
        font-size: 1.1rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        color: ${props => props.theme.text}cc;
    }

    .meta {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;
        font-family: ${props => props.theme.fontCode};
        text-transform: uppercase;
        font-size: 0.9rem;
    }

    button.add-cart {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.body};
        border: none;
        padding: 1rem 2rem;
        border-radius: 4px;
        font-family: ${props => props.theme.fontCode};
        font-weight: bold;
        cursor: pointer;
        width: 100%;
        transition: all 0.3s;
        &:hover {
            background: ${props => props.theme.secondary};
            transform: translateY(-2px);
        }
    }
`

function Pesquisa() {
    const [pocoesPesquisadas, setPocoesPesquisadas] = useState([])
    const [pocoes, setPocoes] = useState([])
    const [itemSelecionado, setItemSelecionado] = useState(null)
    const { addToCart } = useCart()

    useEffect(() => {
        fetchPocoes()
    }, [])

    async function fetchPocoes() {
        const pocoesDaApi = await getPocoes()
        setPocoes(pocoesDaApi || [])
        setPocoesPesquisadas(pocoesDaApi || [])
    }

    const adicionarAoCarrinho = (item) => {
        addToCart(item);
        alert(`${item.nome} injetado no sistema com sucesso!`);
        setItemSelecionado(null);
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
                <Resultado key={pocao.id} tipo={pocao.tipo} onClick={() => setItemSelecionado(pocao)}>
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

            {itemSelecionado && (
                <ModalOverlay onClick={() => setItemSelecionado(null)}>
                    <ModalCard onClick={e => e.stopPropagation()}>
                        <button className="close" onClick={() => setItemSelecionado(null)}>&times;</button>
                        <div className="modal-content">
                            <img src={require(`../../img/${itemSelecionado.src}`)} alt={itemSelecionado.nome} />
                            <h4>{itemSelecionado.nome}</h4>
                            <p className="descricao">{itemSelecionado.descricao}</p>
                            <div className="meta">
                                <span style={{ color: itemSelecionado.tipo === 'berserk' ? '#a855f7' : '#4ade80' }}>
                                    {itemSelecionado.tipo}
                                </span>
                                <span>Preço: {itemSelecionado.preco} ZAN</span>
                            </div>
                            <button className="add-cart" onClick={() => adicionarAoCarrinho(itemSelecionado)}>
                                INJETAR NO SISTEMA (ADICIONAR)
                            </button>
                        </div>
                    </ModalCard>
                </ModalOverlay>
            )}
        </PesquisaContainer>
    )
}

export default Pesquisa;