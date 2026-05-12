import Logo from '../../components/Logo'
import Paginas from '../../components/Pagina'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

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

const CartIndicator = styled.div`
    color: ${props => props.theme.secondary};
    font-family: ${props => props.theme.fontCode};
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    border: 1px solid ${props => props.theme.secondary}44;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s;

    &:hover {
        background: ${props => props.theme.secondary}22;
        border-color: ${props => props.theme.secondary};
    }

    span.count {
        background: ${props => props.theme.secondary};
        color: white;
        padding: 2px 6px;
        border-radius: 50%;
        font-size: 0.7rem;
        font-weight: bold;
    }
`

const Actions = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

function Header({ toggleTheme, currentTheme }) {
    const { cartCount } = useCart()

    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <Paginas />
            <Actions>
                <CartIndicator>
                    AMOSTRAS: <span className="count">{cartCount}</span>
                </CartIndicator>
                <ThemeToggle onClick={toggleTheme}>
                    {currentTheme === 'dark' ? 'MODO CLARO' : 'MODO ZAUN'}
                </ThemeToggle>
            </Actions>
        </HeaderContainer>
    )
}

export default Header
