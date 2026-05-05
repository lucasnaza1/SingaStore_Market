import Logo from '../../components/Logo'
import Paginas from '../../components/Pagina'
import Icones from '../../components/Icone'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: ${props => props.theme.navBackground};
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid ${props => props.theme.border};
`

const ThemeToggle = styled.button`
    background: none;
    border: 1px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-family: ${props => props.theme.fontCode};
    font-size: 0.8rem;
    text-transform: uppercase;
    &:hover {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.body};
    }
`

function Header({ toggleTheme, currentTheme }) {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <Paginas />
            <Icones />
            <ThemeToggle onClick={toggleTheme}>
                {currentTheme === 'dark' ? 'MODO CLARO' : 'MODO ZAUN'}
            </ThemeToggle>
        </HeaderContainer>
    )
}

export default Header