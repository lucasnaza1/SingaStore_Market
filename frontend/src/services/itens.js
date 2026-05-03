import axios from "axios";

const pocoesAPI = axios.create({ baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}` })

async function getPocoes() {
    const response = await pocoesAPI.get('/itens')

    return response.data
}

export {
    getPocoes
}