import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
const pocoesAPI = axios.create({ baseURL: apiBaseURL })

async function getPocoes() {
    try {
        const response = await pocoesAPI.get('/itens')
        return response.data
    } catch (error) {
        console.error('Erro ao buscar poções:', error)
        return []
    }
}

export {
    getPocoes
}
