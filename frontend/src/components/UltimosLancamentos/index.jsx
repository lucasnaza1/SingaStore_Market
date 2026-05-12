import styled from 'styled-components'
import { Titulo } from '../Titulo/index'
import CardRecomenda from '../cardRecomenda/index'

const UltimosLancamentosContainer = styled.section`
    background-color: ${props => props.theme.background};
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${props => props.theme.border};
`
function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor = {props => props.theme.secondary}
                > ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <CardRecomenda
                titulo='Solas Simbióticas'
                subtitulo='Retorne mais rápido...'
                descricao='Tempo ganha partidas'
            />            
        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos
