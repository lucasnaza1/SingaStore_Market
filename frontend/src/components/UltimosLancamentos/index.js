import styled from 'styled-components'
import { Titulo } from '../Titulo/index'
import CardRecomenda from '../cardRecomenda/index'
import solasSimbioticas from '../../img/solas-simbioticas.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo 
                cor = '#2b993dff'
                > ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <CardRecomenda
                titulo='Solas Simbióticas'
                subtitulo='Retorne mais rápido...'
                descricao='Tempo ganha partidas'
                img={solasSimbioticas}
            />            
        </UltimosLancamentosContainer>

    )
}

export default UltimosLancamentos