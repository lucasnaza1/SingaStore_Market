import logo from '../../img/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  align-items: center;
`

const LogoImage = styled.img`
  margin-right: 1rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
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