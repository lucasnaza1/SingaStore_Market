import logo from '../../img/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  font-family: ${props => props.theme.fontDisplay};
  color: ${props => props.theme.primary};
  letter-spacing: 2px;
  text-transform: uppercase;
`

const LogoImage = styled.img`
  margin-right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  filter: drop-shadow(0 0 5px ${props => props.theme.primary}66);
`

function Logo(){
return(
        <LogoContainer>
          <LogoImage
              src={logo} 
              alt= 'Singastore logo'
        />
        <p>Singastore</p>
        </LogoContainer>
)
}

export default Logo