import styled from 'styled-components';
import Lore from '../components/Lore';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #26b928 30%, #68bd69 100%);

  li{
    list-style: none;
`

function Home() {
  return (
    <AppContainer>
      <Lore />
    </AppContainer>
  );
}

export default Home;
