import styled from 'styled-components'

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: ${props => props.cor || props.theme.primary};
    font-size: ${props => props.tamanhoFonte || "36px"};
    text-align: ${props => props.alinhamento || "center"};
    margin: 0;
    font-family: ${props => props.theme.fontDisplay};
    text-transform: uppercase;
    letter-spacing: 2px;
`