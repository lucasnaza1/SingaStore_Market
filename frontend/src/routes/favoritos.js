import { useEffect, useState } from 'react';
import { deleteFavoritos, getFavoritos } from '../services/favoritos';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #26b928 30%, #68bd69 100%);

  li{
    list-style: none;
`
const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`
const BotaoDeletar = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursos: pointer;
  margin-left: 20px;

  &:hover {
    background-color: #cc0000;
    }

`


function Favoritos() {
    const [favoritos, setFavoritos] = useState([])

    async function fetchFavoritos() {
        const favoritosDaAPI = await getFavoritos()
        setFavoritos(favoritosDaAPI)
    }

    async function removerFavorito(id) {
        await deleteFavoritos(id)
        await fetchFavoritos()
        alert(`Livro de id ${id} removido dos favoritos!`)
    }

    useEffect(() => {
        fetchFavoritos([])
    }, [])
    return (
        <AppContainer>
            <div>
                <Titulo>Aqui estão seus itens favoritos:</Titulo>
                <ResultadoContainer>
                    {
                        favoritos.length !== 0 ? favoritos.map(favorito => (
                            <Resultado key={favorito.id}>
                                <BotaoDeletar onClick={() => removerFavorito(favorito.id)}> X </BotaoDeletar>
                                <p>{favorito.nome}</p>
                            </Resultado>
                        )) : null
                    }
                </ResultadoContainer>
            </div>
        </AppContainer>
    );
}


export default Favoritos;
