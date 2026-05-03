import Logo from '../../components/Logo'
import Paginas from '../../components/Pagina'
import Icones from '../../components/Icone'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <Paginas />
            <Icones />
        </HeaderContainer>
    )
}

export default Header