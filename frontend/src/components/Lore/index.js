import styled from "styled-components";

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #02511cff 35%, #2b993dff 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const Conteudo = styled.div`
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: 18px;
        padding: 4px 120px;
`

function Lore() {

    return (
        <PesquisaContainer>
            <Titulo>Quem é o Singas?</Titulo>
            <Subtitulo>Singed, o químico louco</Subtitulo>
            <Conteudo>
                Singed é um alquimista brilhante com moral duvidosa cujos experimentos embrulhariam o estômago até do criminoso mais brutal.
                Vendendo suas habilidades para quem paga mais, ele pouco se importa com o uso que fazem de suas misturas nocivas e vê o caos subsequente como mais um experimento.
                Sua criação mais infame é a "cintila", que deu aos Barões da Química o poder sobre Zaun.
                Impulsionado pela loucura, Singed sempre está trabalhando em algo novo, cada empreitada mais perversa que a anterior…
            </Conteudo>
        </PesquisaContainer>
    )
}

export default Lore;