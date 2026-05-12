import styled from "styled-components";

const PesquisaContainer = styled.section`
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.text};
        text-align: center;
        padding: 100px 2rem;
        width: 100%;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

const Titulo = styled.h2`
        font-size: 48px;
        margin-bottom: 0.5rem;
`

const Subtitulo = styled.h3`
        font-size: 14px;
        font-family: ${props => props.theme.fontCode};
        color: ${props => props.theme.secondary};
        margin-bottom: 3rem;
        letter-spacing: 4px;
`
const Conteudo = styled.div`
        max-width: 800px;
        font-size: 20px;
        line-height: 1.8;
        font-style: italic;
        position: relative;
        
        &::before {
            content: '"';
            position: absolute;
            left: -40px;
            top: -20px;
            font-size: 80px;
            color: ${props => props.theme.primary}22;
            font-family: serif;
        }
`

const Estatisticas = styled.div`
    display: flex;
    gap: 4rem;
    margin-top: 4rem;
`

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span:first-child {
        font-family: ${props => props.theme.fontCode};
        font-size: 24px;
        color: ${props => props.theme.primary};
    }

    span:last-child {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${props => props.theme.text}88;
    }
`

function Lore() {
    return (
        <PesquisaContainer>
            <Titulo>Protocolo de Laboratório</Titulo>
            <Subtitulo>RELATÓRIO DE EXPERIMENTAÇÃO #001</Subtitulo>
            <Conteudo>
                A moral é uma restrição química para mentes fracas. No meu laboratório, não há espaço para remorso, apenas para resultados. 
                Cada mistura, cada vapor tóxico, é um passo em direção à evolução necessária. 
                Você busca poder? Eficiência? Sobrevivência? 
                Saiba que o progresso exige sacrifício... geralmente o de outros. 
                Beba. Observe. Evolua. Ou torne-se apenas mais um resíduo no chão de Zaun.
            </Conteudo>
            <Estatisticas>
                <StatItem>
                    <span>99.9%</span>
                    <span>Pureza Nociva</span>
                </StatItem>
                <StatItem>
                    <span>0</span>
                    <span>Vítimas... Sobreviventes</span>
                </StatItem>
                <StatItem>
                    <span>∞</span>
                    <span>Progresso</span>
                </StatItem>
            </Estatisticas>
        </PesquisaContainer>
    )
}

export default Lore;