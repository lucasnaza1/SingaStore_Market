import styled from 'styled-components'
import carrinho from '../../img/carrinho.png'

const icones = [ carrinho ]

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`
const Icone = styled.li`
    margin-right: 2.5rem;
    padding: 0 0.5rem;
    cursor: pointer;
    list-style: none;
`

function Icones(){
    return(
       <IconesContainer>
          {icones.map( (icone, index) => (
            <Icone key={index}><img src={icone} alt='icone'></img></Icone>
          ))}
        </IconesContainer>
    )
}

export default Icones