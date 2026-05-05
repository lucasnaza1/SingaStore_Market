import styled from 'styled-components';
import Lore from '../components/Lore';

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.body};
`

function Home() {
  return (
    <AppContainer>
      <Lore />
    </AppContainer>
  );
}

export default Home;
