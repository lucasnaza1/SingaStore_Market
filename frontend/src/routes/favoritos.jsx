import { useEffect, useState } from 'react';
import { deleteFavoritos, getFavoritos } from '../services/favoritos';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.body};
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
   margin: 20px;
   cursor: pointer;
   text-align: center;
   padding: 20px;
   background-color: ${props => props.theme.cardBackground};
   border: 1px solid ${props => props.theme.border};
   border-radius: 8px;
   transition: all 0.3s ease;

   p {
       max-width: 260px;
       color: ${props => props.theme.text};
       font-family: ${props => props.theme.fontDisplay};
       overflow-wrap: anywhere;
       margin: 0;
   }
   &:hover {
       border-color: ${props => props.theme.primary};
       background-color: ${props => props.theme.cardHover};
   }
`

const Titulo = styled.h2`
   color: ${props => props.theme.primary};
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px;
   font-family: ${props => props.theme.fontDisplay};
`
const BotaoDeletar = styled.button`
  background-color: transparent;
  color: ${props => props.theme.secondary};
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 20px;
  font-family: ${props => props.theme.fontCode};

  &:hover {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.body};
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
        alert(`Item de id ${id} removido dos favoritos!`)
    }

    useEffect(() => {
        fetchFavoritos()
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
