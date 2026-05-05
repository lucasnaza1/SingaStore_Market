import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos/index'

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.body};
`

function Itens() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Itens;
