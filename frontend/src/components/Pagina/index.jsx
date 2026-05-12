import styled from 'styled-components'
import { Link } from 'react-router-dom'

const rotasPaginas = ['ITENS', 'FAVORITOS']

const PaginasContainer = styled.ul`
     display: flex;
     gap: 2rem;
`
const PaginaTexto = styled.li`
    list-style: none;
    font-size: 1rem;
    font-family: ${props => props.theme.fontDisplay};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
    color: ${props => props.theme.text};
    letter-spacing: 1px;
    
    &:hover {
        color: ${props => props.theme.primary};
        text-shadow: 0 0 10px ${props => props.theme.primary}66;
    }
`

function Paginas() {
  return (
    <PaginasContainer>
      {rotasPaginas.map((rota) => (
        <Link key={rota} to={`/${rota.toLowerCase()}`}>
          <PaginaTexto><p>{rota}</p></PaginaTexto>
        </Link>
      ))}
    </PaginasContainer>
  )
}

export default Paginas