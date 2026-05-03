import styled from 'styled-components'
import { Link } from 'react-router-dom'

const rotasPaginas = ['ITENS', 'FAVORITOS']

const PaginasContainer = styled.ul`
     display: flex;
`
const PaginaTexto = styled.li`
    list-style: none;
    min-width: 8rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 0.5rem;
    cursor: pointer;
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