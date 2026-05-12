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

const LogoMark = styled.div`
  margin-right: 1rem;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.border};
  background: radial-gradient(circle at 30% 30%, ${props => props.theme.primary}55, transparent 55%),
    radial-gradient(circle at 70% 70%, ${props => props.theme.secondary}44, transparent 60%),
    ${props => props.theme.cardBackground};
  box-shadow: 0 0 12px ${props => props.theme.primary}22;
`

function Logo(){
return(
        <LogoContainer>
        <LogoMark aria-hidden="true" />
        <p>Singastore Design</p>
        </LogoContainer>
)
}

export default Logo
